import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, NgForm, Validators,FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import {Doctor} from './Doctor';
import { DoctorProfileService } from './doctor-profile.service';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {
  Doctor:Doctor=new Doctor();
  doc= new Doctor();
  @ViewChild("docform") public formref!: NgForm;
 constructor(private router:Router, private doctorService:DoctorProfileService) {

  }

  ngOnInit(): void {
  }
  validate() {
    this.doctorService.addDoctor(this.doc).subscribe(data=>{
      console.log ("method success")


    })
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
