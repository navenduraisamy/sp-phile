import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayService {
  private playAction = new Subject<string>();
  playTrack$ = this.playAction.asObservable();

  constructor() { }

  play(trackHash: string) {
    let tracksrc = `https://open.spotify.com/embed/track/${trackHash}?play=1`;
    this.playAction.next(tracksrc);
  }
}
