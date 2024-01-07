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

  getTopTracksOfUser(): Observable<any> {
    return this.http.get('https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=5&offset=0');
  }

  getTopArtistsOfUser(): Observable<any> {
    return this.http.get('https://api.spotify.com/v1/me/top/artists?time_range=short_term&limit=5&offset=0');
  }
}
