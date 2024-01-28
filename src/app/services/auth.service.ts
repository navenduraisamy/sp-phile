import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { TokenService } from './token.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly CLIENT_ID: string = environment.client_id;
  private readonly REDIRECT_URL: string = environment.redirect_url;
  private readonly scopes = ["user-read-private", "user-read-email", "user-top-read", "playlist-modify-public"];
  private code?: string;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly http: HttpClient,
    private readonly router: Router,
    private readonly tokenService: TokenService
  ) {
    this.activatedRoute.queryParams.subscribe(params => {
      let code: string = params['code'];
      if (code) {
        let codeVerifier: string = localStorage.getItem('code_verifier') as string;
        this.getToken(code, codeVerifier);
      }
    }
    );
  }

  getToken(code: string, codeVerifier: string) {
    let httpHeaders: HttpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.set('Content-Type', 'application/x-www-form-urlencoded');

    let body = new URLSearchParams({
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: this.REDIRECT_URL,
      client_id: this.CLIENT_ID,
      code_verifier: codeVerifier
    });

    this.http
      .post("https://accounts.spotify.com/api/token", body, { headers: httpHeaders })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error("Error fetching token", error);
          return of(null);
        })
      )
      .subscribe((response: any) => {
        if (response !== null) {
          this.tokenService.setAccessToken(response.access_token);
          this.tokenService.setRefreshToken(response.refresh_token);
          this.router.navigate(['sp-phile']);
        }
      });
  }

  authorize(): void {
    let codeVerifier = this.generateRandomString(128);

    this.generateCodeChallenge(codeVerifier).then(codeChallenge => {
      let state = this.generateRandomString(16);
      let scope = this.scopes.join(" ");

      localStorage.setItem('code_verifier', codeVerifier);

      let args = new URLSearchParams({
        response_type: 'code',
        client_id: this.CLIENT_ID,
        scope: scope,
        redirect_uri: this.REDIRECT_URL,
        state: state,
        code_challenge_method: 'S256',
        code_challenge: codeChallenge
      });

      window.location.assign('https://accounts.spotify.com/authorize?' + args);
    });
  }

  generateRandomString(length: number): string {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  async generateCodeChallenge(codeVerifier: string): Promise<string> {
    function base64encode(string: ArrayBuffer) {
      return btoa(String.fromCharCode(...new Uint8Array(string)))
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
    }
    const encoder = new TextEncoder();
    const data = encoder.encode(codeVerifier);
    const digest = await window.crypto.subtle.digest('SHA-256', data);
    return base64encode(digest);
  }
}

