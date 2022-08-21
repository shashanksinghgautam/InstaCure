import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientComponent } from './consultation/patient/patient.component';
import { DoctorDisplayComponent } from './doctor-display/doctor-display.component';
import { HomeComponent } from './home/home.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { medicineComponent } from './medicine/medicine.component';
import { AddnewComponent } from './medicine/volunteer/addnew/addnew.component';
import { UpdateComponent } from './medicine/volunteer/update/update.component';
import { VolunteerComponent } from './medicine/volunteer/volunteer.component';
import { PatientComponentComponent } from './patient-component/patient-component.component';
import { PatientDisplayComponent } from './patient-display/patient-display.component';
import { RegisterComponentComponent } from './register-component/register-component.component';
import { VolunteerDisplayComponent } from './volunteer-profile/volunteer-display/volunteer-display.component';
import { VolunteerProfileComponent } from './volunteer-profile/volunteer-profile.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';


const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  { path: 'home', component: HomeComponent },
  { path: 'login-component', component: LoginComponentComponent },
  { path: 'register-component', component: RegisterComponentComponent },
  {path:  'volunteer-display', component: VolunteerDisplayComponent},
  { path: 'medicine', component: medicineComponent },
  { path: 'medicine-volunteer', component: VolunteerComponent },
  { path: 'add', component: AddnewComponent },
  { path: 'update/:id', component: UpdateComponent },
  {path:'update-volunteer/:id',component:VolunteerProfileComponent},
  { path: 'consultation/patient', component:PatientComponent },

  { path: 'DoctorProfileComponent', component:DoctorProfileComponent},

  {path:'patient-component', component:PatientComponentComponent},
  {path:'patient-display', component:PatientDisplayComponent},
  {path:'doctor-display', component:DoctorDisplayComponent},
  {path:'doctor-profile', component:DoctorProfileComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
