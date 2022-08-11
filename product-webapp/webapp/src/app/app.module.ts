import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { RegisterComponentComponent } from './register-component/register-component.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
import { VolunteerProfileComponent } from './volunteer-profile/volunteer-profile.component';
=======

import { VolunteerProfileComponent } from './volunteer-profile/volunteer-profile.component';

>>>>>>> f36bccbce9aa93fb9e9c95da0a77c1d0f3e8a652
import { PatientComponentComponent } from './patient-component/patient-component.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { medicineComponent } from './medicine/medicine.component';
<<<<<<< HEAD
=======

>>>>>>> f36bccbce9aa93fb9e9c95da0a77c1d0f3e8a652
import { VolunteerComponent } from './medicine/volunteer/volunteer.component';
import { UpdateComponent } from './medicine/volunteer/update/update.component';

import { HomeComponent } from './home/home.component';
import { PatientComponent } from './consultation/patient/patient.component';
import { AddnewComponent } from './medicine/volunteer/addnew/addnew.component';


<<<<<<< HEAD
=======


>>>>>>> f36bccbce9aa93fb9e9c95da0a77c1d0f3e8a652
@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    RegisterComponentComponent,
    PatientComponentComponent,
    medicineComponent,
    VolunteerComponent,
    UpdateComponent,
<<<<<<< HEAD
=======

   
   
  

>>>>>>> f36bccbce9aa93fb9e9c95da0a77c1d0f3e8a652
    VolunteerProfileComponent,
    medicineComponent,
    PatientComponentComponent,
    HomeComponent,
    PatientComponent,
<<<<<<< HEAD
=======
    AddnewComponent,


>>>>>>> f36bccbce9aa93fb9e9c95da0a77c1d0f3e8a652
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
<<<<<<< HEAD
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule,
=======



    ReactiveFormsModule,  
    HttpClientModule,

    ReactiveFormsModule,


    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule,


>>>>>>> f36bccbce9aa93fb9e9c95da0a77c1d0f3e8a652
  ],
  providers: [HttpClientModule, HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
