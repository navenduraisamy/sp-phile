import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  

  constructor(private readonly http: HttpClient) { }

  getProfile(): Observable<any> {
    return this.http.get("https://api.spotify.com/v1/me");
  }
}
