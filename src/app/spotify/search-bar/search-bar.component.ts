import { Component, OnInit, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, debounceTime } from 'rxjs';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  searchResults?: Observable<any>;
  searchControl: FormControl = new FormControl<string>('kaavalaya');

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(debounceTime(1000))
      .subscribe((searchString) => this.makeSearch(searchString));
  }

  makeSearch(searchString: string): void{
    if(searchString){
      this.searchResults = this.spotifyService.getSearchResults(searchString);
    }
  }

}
