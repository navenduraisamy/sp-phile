import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  constructor(private readonly spotify_auth: AuthService){
  }

  ngOnInit(): void {
  }

  loginWithSpotify(): void{
    this.spotify_auth.authorize();
  }

}
