import { Component, TemplateRef } from '@angular/core';
import { toJpeg } from 'html-to-image';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-montly-wrapped',
  templateUrl: './montly-wrapped.component.html',
  styleUrls: ['./montly-wrapped.component.scss']
})
export class MontlyWrappedComponent {

  addIcon = "\uF64D";
  downArrowIcon = "\uF128";
  tickIcon = "\uF272";

  addToPlaylistIcon = this.addIcon;
  downloadImageIcon = this.downArrowIcon;
  isActionComplete: "PL" | "DI" | null = null;

  constructor(
    private spotify: SpotifyService,
    ) { }

  downloadImage(template: HTMLDivElement): void {
    if(this.isActionComplete === "DI")
      return;

    toJpeg(template,  { quality: 1, style: { background: "white" } })
      .then((dataUrl) => {
        var link = document.createElement('a');
        link.download = 'sp-phile-stats.jpeg';
        link.href = dataUrl;
        link.click();

        this.downloadImageIcon = this.tickIcon;
        this.isActionComplete = "DI";
        setTimeout(() => {
          this.downloadImageIcon = this.downArrowIcon;
          this.isActionComplete = null;
        }, 5000);
        
      })
      .catch((err: Error) => console.error(`Error: Could not download image. \n ${err.message}`))
  }

  createPlaylist(): void {
    if(this.isActionComplete === "PL")
      return;

    this.spotify.createPlayList().subscribe(() => {
      this.addToPlaylistIcon = this.tickIcon;
      this.isActionComplete = "PL";
      setTimeout(() => {
        this.addToPlaylistIcon = this.addIcon;
        this.isActionComplete = null;
      }, 5000);
    });
  }

}
