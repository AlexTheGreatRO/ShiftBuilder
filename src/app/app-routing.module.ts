import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddShiftComponent } from './components/add-shift/add-shift.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { MyShiftsComponent } from './components/my-shifts/my-shifts.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: '', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: 'myShifts', component: MyShiftsComponent },
  { path: 'addShift', component: AddShiftComponent },
  { path: 'editProfile', component: EditProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
