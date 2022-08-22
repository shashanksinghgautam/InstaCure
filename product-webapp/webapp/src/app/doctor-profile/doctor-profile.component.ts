import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, NgForm, Validators,FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import {Doctor} from './Doctor';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {
  imglocation='assets/profile.jpg'
  doc= new Doctor();
  @ViewChild("docform") public formref!: NgForm;
 constructor(private router:Router) { }

  ngOnInit(): void {
  }
  validate() {
    console.log(
      'success' +
        ' ' +
        this.doc.gender +
        ' ' +
        this.doc.dob +
        ' ' +
        this.doc.address +
        ' ' +
        this.doc.city +
        ' ' +
        this.doc. state +
        ' ' +
        this.doc.postalCode +
        ' ' +
        this.doc.educationQualifiaction +
        ' ' +
        this.doc.speciality +
        ' ' +
        this.doc.yearOfExpertise
    ); //ref.email.value +"  "+ ref.mob.value);
    //this.router.navigateByUrl('dashboard')
  }
  
  

  

}
