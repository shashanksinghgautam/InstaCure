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
=======
import { VolunteerProfileComponent } from './volunteer-profile/volunteer-profile.component';
>>>>>>> e7a3f3b503a5e201e706cf58f9860de2facd41c7
import { PatientComponentComponent } from './patient-component/patient-component.component';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { medicineComponent } from './medicine/medicine.component';
<<<<<<< HEAD
import { VolunteerComponent } from './medicine/volunteer/volunteer.component';
import { UpdateComponent } from './medicine/volunteer/update/update.component';
=======
import { HomeComponent } from './home/home.component';
import { PatientComponent } from './consultation/patient/patient.component';


>>>>>>> e7a3f3b503a5e201e706cf58f9860de2facd41c7

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    RegisterComponentComponent,
<<<<<<< HEAD
    PatientComponentComponent,
    VolunteerProfileComponent,
    medicineComponent,
    VolunteerComponent,
    UpdateComponent,

   
   
  
=======
    VolunteerProfileComponent,
    medicineComponent,
    PatientComponentComponent,
    HomeComponent,
    PatientComponent,
>>>>>>> e7a3f3b503a5e201e706cf58f9860de2facd41c7

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
>>>>>>> e7a3f3b503a5e201e706cf58f9860de2facd41c7
  ],
  providers: [HttpClientModule,HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
