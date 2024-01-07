import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import { MontlyWrappedComponent } from './montly-wrapped/montly-wrapped.component';
import { TracksComponent } from './tracks/tracks.component';
import { ArtistsComponent } from './artists/artists.component';

const routes: Routes = [
  { path:"", component: MontlyWrappedComponent }
]

@NgModule({
  declarations: [
    ProfileComponent,
    MontlyWrappedComponent,
    TracksComponent,
    ArtistsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SpotifyModule { }
