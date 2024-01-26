import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss']
})
export class TracksComponent implements OnInit {

  topTracks$ = this.spotify.getTopTracksOfUser(5);
  constructor(private spotify: SpotifyService) { }

  ngOnInit(): void {
  }

}
