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
>>>>>>> ff04d2a2f8bed85e7e1153a4052ba95527a9119f

import { PatientComponentComponent } from './patient-component/patient-component.component';
import { MedicineComponent } from './medicine/medicine.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    RegisterComponentComponent,
<<<<<<< HEAD
    
    
 
    

   

  

   
    PatientComponentComponent,
    MedicineComponent


=======
    PatientComponentComponent,
    VolunteerProfileComponent
>>>>>>> ff04d2a2f8bed85e7e1153a4052ba95527a9119f
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    FormsModule,
<<<<<<< HEAD
    ReactiveFormsModule,  
    HttpClientModule
=======
    ReactiveFormsModule,
>>>>>>> ff04d2a2f8bed85e7e1153a4052ba95527a9119f
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
