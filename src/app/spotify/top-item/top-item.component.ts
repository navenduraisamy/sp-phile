import { Component, Input, OnInit } from '@angular/core';
import { ExternalUrls } from '../interfaces/spotify-types';

@Component({
  selector: 'app-top-item',
  templateUrl: './top-item.component.html',
  styleUrls: ['./top-item.component.scss']
})
export class TopItemComponent implements OnInit {

  @Input()
  name: string = "";

  @Input()
  subText: string = "";

  @Input()
  externalUrl!: ExternalUrls;
  

  constructor() { }

  ngOnInit(): void {
  }

}
