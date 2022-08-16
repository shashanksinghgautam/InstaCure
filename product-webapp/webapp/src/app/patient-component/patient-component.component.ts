
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { Patient } from 'src/PatientProfile';



@Component({
  selector: 'app-patient-component',
  templateUrl: './patient-component.component.html',
  styleUrls: ['./patient-component.component.css']
})
export class PatientComponentComponent implements OnInit{

  pat= new Patient();
  
  @ViewChild("patform") public formref!: NgForm;
  constructor(private router:Router) { }


  ngOnInit(): void {
  }


  validate(){
    console.log("success"+" "+ this.pat.email + " "+this.pat.mobile + " "+this.pat.dob + " "+this.pat.address + " "+this.pat.city + " "+this.pat.postalCode);//ref.email.value +"  "+ ref.mob.value);
    //this.router.navigateByUrl('dashboard')
   }
  


}
