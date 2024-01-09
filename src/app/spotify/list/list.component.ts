import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input()
  list: any[] = [];

  @ContentChild("listItemTemplate")
  listItemTemplate!: TemplateRef<any>;


  constructor() { }

  ngOnInit(): void {
  }

}
