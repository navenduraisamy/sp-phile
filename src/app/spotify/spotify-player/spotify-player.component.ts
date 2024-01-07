import { Component, OnInit } from '@angular/core';
import { PlayService } from '../services/play.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-spotify-player',
  templateUrl: './spotify-player.component.html',
  styleUrls: ['./spotify-player.component.scss']
})
export class SpotifyPlayerComponent implements OnInit {
  track: string | null = null;

  playTrack$: Observable<string> = this.playService.playTrack$;

  constructor(private playService: PlayService) {
    this.playService.playTrack$.subscribe(trackUrl => this.track = trackUrl)
   }

  ngOnInit(): void {
  }

}
