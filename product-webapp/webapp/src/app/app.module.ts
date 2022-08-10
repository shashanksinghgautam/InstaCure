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
import { PatientComponentComponent } from './patient-component/patient-component.component';

import { HttpClientModule } from '@angular/common/http';
import { VolunteerProfileComponent } from './volunteer-profile/volunteer-profile.component';
import { medicineComponent } from './medicine/medicine.component';
import { VolunteerComponent } from './medicine/volunteer/volunteer.component';
import { UpdateComponent } from './medicine/volunteer/update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    RegisterComponentComponent,
    PatientComponentComponent,
    VolunteerProfileComponent,
    medicineComponent,
    VolunteerComponent,
    UpdateComponent,

   
   
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    FormsModule,


    ReactiveFormsModule,  
    HttpClientModule,

    ReactiveFormsModule,


    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
