import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  { 
    path: "sp-phile", 
    loadChildren: () => import("./spotify/spotify.module").then((module) => module.SpotifyModule),
    canActivate: [AuthGuard]
  },
  {
    path:"**",
    redirectTo:"sp-phile"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
