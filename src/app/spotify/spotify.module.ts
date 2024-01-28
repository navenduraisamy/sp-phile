import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import { MontlyWrappedComponent } from './montly-wrapped/montly-wrapped.component';
import { TracksComponent } from './tracks/tracks.component';
import { ArtistsComponent } from './artists/artists.component';
import { TopItemComponent } from './top-item/top-item.component';
import { JoinPipe } from './pipes/join.pipe';
import { ListComponent } from './list/list.component';
import { ImgDisplayComponent } from './img-display/img-display.component';
import { AveragePipe } from './pipes/average.pipe';
import { StatComponent } from './stat/stat.component';
import { ActionComponent } from './action/action.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';


const routes: Routes = [
  { path:"", component: MontlyWrappedComponent }
]

@NgModule({
  declarations: [
    ProfileComponent,
    MontlyWrappedComponent,
    TracksComponent,
    ArtistsComponent,
    TopItemComponent,
    JoinPipe,
    ListComponent,
    ImgDisplayComponent,
    AveragePipe,
    StatComponent,
    ActionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatSnackBarModule
    
  ]
})
export class SpotifyModule { }
