import { Component } from '@angular/core';
import { toJpeg } from 'html-to-image';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-montly-wrapped',
  templateUrl: './montly-wrapped.component.html',
  styleUrls: ['./montly-wrapped.component.scss']
})
export class MontlyWrappedComponent {

  constructor(private spotify: SpotifyService) { }

  downloadImage(template: HTMLDivElement): void {
    toJpeg(template,  { quality: 1, style: { background: "white" } })
      .then((dataUrl) => {
        var link = document.createElement('a');
        link.download = 'sp-phile-stats.jpeg';
        link.href = dataUrl;
        link.click();
      })
      .catch((err: Error) => console.error(`Error: Could not download image. \n ${err.message}`))
  }

  createPlaylist(): void {
    this.spotify.createPlayList().subscribe();
  }

}
