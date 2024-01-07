import { Component, Input, OnInit } from '@angular/core';
import { TrackItem } from '../interfaces/trackItem';
import { PlayService } from '../services/play.service';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit {

  @Input()
  get trackItem() {
    return this._trackItem;
  }
  set trackItem(trackItem: TrackItem) {
    this._trackItem = trackItem;
    this.artistsName = trackItem.album.artists
    .map((artist) => artist.name)
    .join(", ")
  }
  private _trackItem!: TrackItem;

  artistsName?: string;

  constructor(private playService: PlayService) { }

  ngOnInit(): void {
  }

  play(uri: string): void {
    let trackHash = uri.split(":")[2];
    this.playService.play(trackHash);
  }

}
