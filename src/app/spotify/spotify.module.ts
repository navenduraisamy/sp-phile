import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SpotifyWrapperComponent } from './spotify-wrapper/spotify-wrapper.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpotifyItemComponent } from './spotify-item/spotify-item.component';

const routes: Routes = [
  { path:"", component: SpotifyWrapperComponent }
]

@NgModule({
  declarations: [
    ProfileComponent,
    SearchBarComponent,
    NavBarComponent,
    SpotifyWrapperComponent,
    SpotifyItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SpotifyModule { }
