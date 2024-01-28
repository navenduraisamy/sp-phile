import { Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs';
import { SpotifyService } from 'src/app/services/spotify.service';
import { SpotifyArtist } from '../interfaces/spotify-types';

@Component({
  selector: 'app-img-display',
  templateUrl: './img-display.component.html',
  styleUrls: ['./img-display.component.scss']
})
export class ImgDisplayComponent{

  topArtist = this.spotifyService.getTopArtistsOfUser().pipe(
    filter((artists) => artists.length > 0),
    map((artists): SpotifyArtist => artists[0])
  );

  constructor(private spotifyService: SpotifyService) { }

}
