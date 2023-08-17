import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userProfile?: Observable<any>;

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit(): void {
    this.userProfile = this.spotifyService.getProfile();
  }

  

}
