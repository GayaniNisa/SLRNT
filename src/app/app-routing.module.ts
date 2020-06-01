import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header/header.component';
import { SignupComponent } from './signup/signup/signup.component';
import { Level0LandComponent } from './institite/level0/level0-land/level0-land.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { Level1LandComponent } from './institite/level1/level1-land/level1-land.component';
import { LevelsLandComponent } from './institite/level2/levels-land/levels-land.component';
import { UserLandComponent } from './user/user-land/user-land.component';
import { SigninComponent } from './signin/signin/signin.component';
import { HomeLandComponent } from './home/home-land/home-land.component';



const routes: Routes = [
  {path:'',component:HomeLandComponent},
  {path: 'signup',component: SignupComponent},
  {path: 'signin',component: SigninComponent},
  {path: 'level0',component: Level0LandComponent},
  {path: 'level1',component: Level1LandComponent},
  {path: 'level2',component: LevelsLandComponent},
  {path: 'researcher',component: UserLandComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
