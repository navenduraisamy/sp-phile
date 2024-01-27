import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { SpotifyArtist, SpotifyTopItemsCollection, SpotifyTrack, SpotifyUser } from '../spotify/interfaces/spotify-types';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  

  constructor(private readonly http: HttpClient) { }

  getProfile(): Observable<SpotifyUser> {
    return this.http.get<any>("https://api.spotify.com/v1/me").pipe(
      map((response) => ({ ...response, name: response.display_name }) as SpotifyUser)
    );
  }

  getTopTracksOfUser(count: number): Observable<SpotifyTrack[]> {
    count = Math.min(count, 50);
    return this.http.get<SpotifyTopItemsCollection>(`https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=${count}&offset=0`).pipe(
      map((respose) => respose.items as SpotifyTrack[])
    );
  }

  getTopArtistsOfUser(): Observable<SpotifyArtist[]> {
    return this.http.get<SpotifyTopItemsCollection>('https://api.spotify.com/v1/me/top/artists?time_range=long_term&limit=5&offset=0').pipe(
      map((response) => response.items as SpotifyArtist[])
    );
  }
}
