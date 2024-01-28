import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {

  topArtists$ = this.spotify.getTopArtistsOfUser();

  constructor(private spotify: SpotifyService) { }

  ngOnInit(): void {
  }

}
