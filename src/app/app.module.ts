import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { IndexComponent } from './components/index/index.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MyShiftsComponent } from './components/my-shifts/my-shifts.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { AddShiftComponent } from './components/add-shift/add-shift.component';
import { UpcomingShiftComponent } from './components/upcoming-shift/upcoming-shift.component';
import { PastWeekShiftsComponent } from './components/past-week-shifts/past-week-shifts.component';
import { HighestEarningsComponent } from './components/highest-earnings/highest-earnings.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    IndexComponent,
    NavbarComponent,
    MyShiftsComponent,
    EditProfileComponent,
    AddShiftComponent,
    UpcomingShiftComponent,
    PastWeekShiftsComponent,
    HighestEarningsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
