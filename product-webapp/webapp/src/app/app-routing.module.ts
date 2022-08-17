import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientComponent } from './consultation/patient/patient.component';
import { HomeComponent } from './home/home.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { medicineComponent } from './medicine/medicine.component';
import { AddnewComponent } from './medicine/volunteer/addnew/addnew.component';
import { UpdateComponent } from './medicine/volunteer/update/update.component';
import { VolunteerComponent } from './medicine/volunteer/volunteer.component';
import { RegisterComponentComponent } from './register-component/register-component.component';
import { DoctorDisplayComponent } from './doctor-display/doctor-display.component';
import { PatientComponentComponent } from './patient-component/patient-component.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  { path: 'home', component: HomeComponent },
  { path: 'login-component', component: LoginComponentComponent },
  { path: 'register-component', component: RegisterComponentComponent },
  { path: 'medicine', component: medicineComponent },
  { path: 'medicine-volunteer', component: VolunteerComponent },
  { path: 'add', component: AddnewComponent },
  { path: 'update/:id', component: UpdateComponent },
  { path: 'consultation/patient', component:PatientComponent },
  { path: 'doctor-display', component:DoctorDisplayComponent},
  { path: 'patient-component', component:PatientComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
