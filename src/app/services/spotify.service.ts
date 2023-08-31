import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, debounce, debounceTime, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  

  constructor(private readonly http: HttpClient) { }

  getProfile(): Observable<any> {
    return this.http.get("https://api.spotify.com/v1/me");
  }

  getSearchResults(query: string): Observable<any>{
    let queryParams: HttpParams = new HttpParams()
      .set("q", query)
      .set("type", "track")
    return this.http.get("https://api.spotify.com/v1/search", {
      params: queryParams
    });
  }
}
