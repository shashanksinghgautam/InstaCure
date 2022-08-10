import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientComponent } from './consultation/patient/patient.component';
import { HomeComponent } from './home/home.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { medicineComponent } from './medicine/medicine.component';
import { RegisterComponentComponent } from './register-component/register-component.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  { path: 'home', component: HomeComponent },
  { path: 'login-component', component: LoginComponentComponent },
  { path: 'register-component', component: RegisterComponentComponent },
  { path: 'medicine', component: medicineComponent },
  { path: 'consultation/patient', component:PatientComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
