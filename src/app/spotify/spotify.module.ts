import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SpotifyWrapperComponent } from './spotify-wrapper/spotify-wrapper.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TrackComponent } from './track/track.component';
import { SpotifyPlayerComponent } from './spotify-player/spotify-player.component';
import { SafePipe } from './pipe/safe.pipe';

const routes: Routes = [
  { path:"", component: SpotifyWrapperComponent }
]

@NgModule({
  declarations: [
    ProfileComponent,
    SearchBarComponent,
    NavBarComponent,
    SpotifyWrapperComponent,
    TrackComponent,
    SpotifyPlayerComponent,
    SafePipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SpotifyModule { }
