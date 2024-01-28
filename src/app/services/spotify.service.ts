import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, combineLatest, map, switchMap, tap } from 'rxjs';
import { SpotifyArtist, SpotifyPlaylist, SpotifyTopItemsCollection, SpotifyTrack, SpotifyUser } from '../spotify/interfaces/spotify-types';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  

  constructor(private readonly http: HttpClient) { }

  getProfile(): Observable<SpotifyUser> {
    return this.http.get<any>("https://api.spotify.com/v1/me").pipe(
      map((response) => ({ ...response, name: response.display_name }) as SpotifyUser),
      tap((user) => localStorage.setItem("user_id", user.id))
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

  createPlayList(): Observable<string> {
    let user_id = localStorage.getItem("user_id");

    if (!user_id)
      throw new Error(`Invalid user id ${user_id}`)
    const url = `https://api.spotify.com/v1/users/${user_id}/playlists`;
    const body = {
      name: "SP-PHILE TOP",
      description: "This playlist has been created from sp-phile based on your spotify listening history.",
      public: true
    };
    
    let playlistId$ = this.http.post<SpotifyPlaylist>(url, JSON.stringify(body)).pipe(
      map((playlist): string => playlist.id)
    );

    let topTracksId$ = this.getTopTracksOfUser(5).pipe(
      map((tracks): string[] => tracks.map((track) => `spotify:track:${track.id}`))
    );

    return combineLatest([playlistId$, topTracksId$]).pipe(
      switchMap(([playlistId, tracks]) => this.addItemsToPlaylist(playlistId, tracks))
    );
  }

  addItemsToPlaylist(playlist_id: string, tracks: string[]): Observable<string> {
    let url = `https://api.spotify.com/v1/playlists/${playlist_id}/tracks`;
    const body = {
      uris: tracks,
      position: 0
    }
    return this.http.post<string>(url, JSON.stringify(body));
  }
}
