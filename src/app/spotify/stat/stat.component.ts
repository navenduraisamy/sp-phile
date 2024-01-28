import { Component } from '@angular/core';
import { map } from 'rxjs';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.scss']
})
export class StatComponent{

  stat = this.spotify.getTopTracksOfUser(50).pipe(
    map((tracks) => tracks.map(track => track.popularity)),
    map(this.average)
  )

  constructor(private spotify: SpotifyService) { }

  average(array: number[]): number {
    return Math.round(array.reduce((sum, curr) => sum+curr)/array.length);
  }

}
