import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import { Observable, catchError, switchMap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenService } from '../services/token.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private readonly CLIENT_ID: string = environment.client_id;

  constructor(
    private readonly http: HttpClient,
    private readonly tokenService: TokenService
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let accessToken: string | null = this.tokenService.getAccessToken();
    let refreshToken: string | null = this.tokenService.getRefreshToken();

    // Initial request to fetch the token
    if (request.url.endsWith('api/token') || refreshToken === null) {
      return next.handle(request);
    }

    let req: HttpRequest<unknown> = request.clone({
      setHeaders: {
        "Authorization": `Bearer ${accessToken}`
      }
    });

    let httpHeaders: HttpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded');

    let refresh_token_body = new URLSearchParams({
      grant_type: 'refresh_token',
      client_id: this.CLIENT_ID,
      refresh_token: refreshToken
    });

    let refresh_token_request = this.http
      .post(
        "https://accounts.spotify.com/api/token",
        refresh_token_body,
        { headers: httpHeaders }
      );

    return next.handle(req)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 401 || error.status == 400) {
            return refresh_token_request.pipe(

              switchMap((response: any) => {
                this.tokenService.setAccessToken(response.access_token);
                this.tokenService.setRefreshToken(response.setRefreshToken);

                return next.handle(request.clone({
                  setHeaders: { "Authorization": `Bearer ${accessToken}` }
                }));
              })

            );
          }

          return throwError(() => error);
        })
      );
      
  }
}
