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
import { AddInstrumentsComponent } from './institite/level1/add-instruments/add-instruments.component';
import { InstituteDetailsComponent } from './institite/institute-details/institute-details.component';
import { UserDisplayComponent } from './user/user-display/user-display.component';
import { UserInstituteAddComponent } from './user/user-institute-add/user-institute-add.component';
import { OrderLandComponent } from './orders/order-land/order-land.component';
import { OrderInstrumentComponent } from './orders/order-instrument/order-instrument.component';
import { PublicUserProfileComponent } from './public/public-user-profile/public-user-profile.component';
import { PublicInstituteProfileComponent } from './public/public-institute-profile/public-institute-profile.component';
import { OrderAcceptedComponent } from './public/order-accepted/order-accepted.component';



const routes: Routes = [
  {path:'',component:HomeLandComponent},
  {path: 'signup',component: SignupComponent},
  {path: 'signin',component: SigninComponent},
  {path: 'level0',component: Level0LandComponent},
  {path: 'level1',component: Level1LandComponent},
  {path: 'level2',component: LevelsLandComponent},
  {path: 'researcher',component: UserLandComponent},
  {path: 'researcher/view',component: UserDisplayComponent},
  {path: 'level1/institute',component: InstituteDetailsComponent},
  {path: 'instruments',component: AddInstrumentsComponent},
  {path: 'user/add/institute',component: UserInstituteAddComponent},
  {path: 'order/all/:name',component: OrderLandComponent},
  {path: 'instrument/:id',component: OrderInstrumentComponent},
  {path: 'public/user/:userId',component: PublicUserProfileComponent},
  {path: 'public/institute/:instituteId',component: PublicInstituteProfileComponent},
  {path: 'order/accept/:orderId',component: OrderAcceptedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
