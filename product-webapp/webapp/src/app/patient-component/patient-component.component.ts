import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

import { Router } from '@angular/router';


@Component({
  selector: 'app-patient-component',
  templateUrl: './patient-component.component.html',
  styleUrls: ['./patient-component.component.css']
})
export class PatientComponentComponent implements OnInit{

  email:string = "qwe@gmail.com";

  @ViewChild("patform") public formref!: NgForm;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  validate(ref: any):void{
    console.log("success" + ref.mob.value);//ref.email.value +"  "+ ref.mob.value);
    //this.router.navigateByUrl('dashboard')
   }
  

}
