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
>>>>>>> 8368a567080622ac94af559557e7531c98ce387b
import { PatientComponentComponent } from './patient-component/patient-component.component';

import { HttpClientModule } from '@angular/common/http';
import { VolunteerProfileComponent } from './volunteer-profile/volunteer-profile.component';
import { medicineComponent } from './medicine/medicine.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    RegisterComponentComponent,
<<<<<<< HEAD

    
    
 
    

   

  

   
    PatientComponentComponent,
  



    PatientComponentComponent,
    VolunteerProfileComponent,
    medicineComponent

=======
    MedicineComponent,
    PatientComponentComponent,
    VolunteerProfileComponent,
>>>>>>> 8368a567080622ac94af559557e7531c98ce387b
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    FormsModule,
<<<<<<< HEAD

    ReactiveFormsModule,  
    HttpClientModule,

    ReactiveFormsModule,

=======
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule,
>>>>>>> 8368a567080622ac94af559557e7531c98ce387b
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
