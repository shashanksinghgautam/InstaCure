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
import { MedicineComponent } from './medicine/medicine.component';

import { VolunteerProfileComponent } from './volunteer-profile/volunteer-profile.component';


import { PatientComponentComponent } from './patient-component/patient-component.component';

import { HttpClientModule } from '@angular/common/http';

import { medicineComponent } from './medicine/medicine.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    RegisterComponentComponent,
     MedicineComponent,
   LoginComponentComponent,
    LoginComponentComponent,
    RegisterComponentComponent,
    PatientComponentComponent,
    VolunteerProfileComponent,
    medicineComponent,
    PatientComponentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
