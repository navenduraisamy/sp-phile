import { Component, Input, OnInit } from '@angular/core';

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
  

  constructor() { }

  ngOnInit(): void {
  }

}
