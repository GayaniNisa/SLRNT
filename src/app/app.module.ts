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
import { MatDatepickerModule } from '@angular/material/datepicker'
import {MatNativeDateModule} from '@angular/material/core';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatTreeModule} from '@angular/material/tree';
import {MatMenuModule} from '@angular/material/menu';


import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

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
import { UserInstituteAddComponent } from './user/user-institute-add/user-institute-add.component';
import { Level0ViewInstrumentsComponent } from './institite/level0/level0-view-instruments/level0-view-instruments.component';
import { Level1ViewInstrumentsComponent } from './institite/level1/level1-view-instruments/level1-view-instruments.component';
import { Level2ViewInstrumentsComponent } from './institite/level2/level2-view-instruments/level2-view-instruments.component';
import { InstrumentEditComponent } from './institite/level1/instrument-edit/instrument-edit.component';
import { InstrumentDeleteComponent } from './institite/level1/instrument-delete/instrument-delete.component';
import { InstrumentViewComponent } from './instrument/instrument-view/instrument-view.component';
import { OrderInstrumentComponent } from './orders/order-instrument/order-instrument.component';
import { Level2ManageInstrumentsComponent } from './institite/level2/level2-manage-instruments/level2-manage-instruments.component';
import { InstrumentStateChangeComponent } from './institite/level2/instrument-state-change/instrument-state-change.component';
import { OrderPayhereComponent } from './order-payhere/order-payhere.component';
import { ViewAllOrdersComponent } from './institite/level2/view-all-orders/view-all-orders.component';
import { ViewAcceptedOrdersComponent } from './institite/level2/view-accepted-orders/view-accepted-orders.component';
import { OrderAcceptedComponent } from './public/order-accepted/order-accepted.component';
import { PublicUserProfileComponent } from './public/public-user-profile/public-user-profile.component';
import { PublicInstituteProfileComponent } from './public/public-institute-profile/public-institute-profile.component';
import { ViewPaidOrdersComponent } from './institite/level2/view-paid-orders/view-paid-orders.component';


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
    InstituteDetailsComponent,
    UserInstituteAddComponent,
    Level0ViewInstrumentsComponent,
    Level1ViewInstrumentsComponent,
    Level2ViewInstrumentsComponent,
    InstrumentEditComponent,
    InstrumentDeleteComponent,
    InstrumentViewComponent,
    OrderInstrumentComponent,
    Level2ManageInstrumentsComponent,
    InstrumentStateChangeComponent,
    OrderPayhereComponent,
    ViewAllOrdersComponent,
    ViewAcceptedOrdersComponent,
    OrderAcceptedComponent,
    PublicUserProfileComponent,
    PublicInstituteProfileComponent,
    ViewPaidOrdersComponent
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
    MatDatepickerModule,
    HttpClientModule,
    MatNativeDateModule,
    MatListModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTreeModule,
    MatMenuModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
