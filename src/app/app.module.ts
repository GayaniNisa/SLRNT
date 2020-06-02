import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar'
import { MatCardModule } from '@angular/material/card'
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon'
import { MatSelectModule } from '@angular/material/select'
import { MatChipsModule } from '@angular/material/chips'
import { MatButtonModule } from '@angular/material/button'
import { MatDividerModule } from '@angular/material/divider'
import { MatExpansionModule } from '@angular/material/expansion'

import { HomeLandComponent } from './home/home-land/home-land.component';
import { HeaderComponent } from './header/header/header.component';
import { SignupComponent } from './signup/signup/signup.component';
import { SigninComponent } from './signin/signin/signin.component';
import { Level0LandComponent } from './institite/level0/level0-land/level0-land.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { OrderLandComponent } from './orders/order-land/order-land.component';
import { AuthInterceptor } from './auth/auth-interceptor';
import { HeaderCommonComponent } from './header-common/header-common.component';
import { Level1LandComponent } from './institite/level1/level1-land/level1-land.component';
import { LevelsLandComponent } from './institite/level2/levels-land/levels-land.component';
import { HeaderCommon0Component } from './header-common0/header-common0.component';
import { HeaderCommon1Component } from './header-common1/header-common1.component';
import { HeaderCommon2Component } from './header-common2/header-common2.component';
import { UserLandComponent } from './user/user-land/user-land.component';
import { Level0SideNavComponent } from './institite/level0/level0-side-nav/level0-side-nav.component';
import { AddInstrumentsComponent } from './institite/level1/add-instruments/add-instruments.component';
import { AddDepartmentComponent } from './institite/level0/add-department/add-department.component';
import { UserDisplayComponent } from './user/user-display/user-display.component';
import { InstituteDetailsComponent } from './institite/institute-details/institute-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeLandComponent,
    HeaderComponent,
    SignupComponent,
    SigninComponent,
    Level0LandComponent,
    UserProfileComponent,
    OrderLandComponent,
    HeaderCommonComponent,
    Level1LandComponent,
    LevelsLandComponent,
    HeaderCommon0Component,
    HeaderCommon1Component,
    HeaderCommon2Component,
    UserLandComponent,
    Level0SideNavComponent,
    AddInstrumentsComponent,
    AddDepartmentComponent,
    UserDisplayComponent,
    InstituteDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatChipsModule,
    MatButtonModule,
    MatDividerModule,
    MatExpansionModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
