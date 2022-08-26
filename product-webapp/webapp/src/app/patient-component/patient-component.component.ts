import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/PatientProfile';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-component',
  templateUrl: './patient-component.component.html',
  styleUrls: ['./patient-component.component.css'],
})
export class PatientComponentComponent implements OnInit {
  Patient: Patient = new Patient();
  Checked: any;
  medcheck:any;
  otherSymp:any
  id!: number;
  Patients:any[]=[]
  selectedItemsList:any[] = [];
  medcond:any[] = [];
  precon:any[] = [];


  @ViewChild('patform') public formref!: NgForm;
  constructor(private router: Router) {
    }


  ngOnInit(): void {

    this.fetchSelectedItems()
    this.fetchCheckedIDs()
  }

  validate() {

    console.log(
      'success' +
        ' ' +

        ' ' +
        this.Patient.dob +
        ' ' +
        this.Patient.address +
        ' ' +
        this.Patient.city +
        ' ' +
        this.Patient.postalCode
    );

    for(let i=0; i<this.selectedItemsList.length; i++){
      this.precon.push(this.selectedItemsList[i].label);//use i instead of 0
    }

    if(this.medcheck){
      this.precon.push(this.otherSymp);
    }
    for(let i=0; i<this.precon.length; i++){
      console.log('pre: '+this.precon[i]);
    }

    this.router.navigate(['./patient-display']);

  }


  takeOthers(e: any) {
    if (e.target.checked) {
      this.Checked = true;
    }
    else{
      this.Checked=false;
    }
  }



  checkboxesDataList = [
    {
      id: 'C001',
      label: 'Cholestrol',
      isChecked: false
    },

    {
      id: 'C003',
      label: 'Diabetes',
      isChecked: false
    },
    {
      id: 'C004',
      label: 'Asthama',
      isChecked: false
    }
  ]



  changeSelection() {
    this.fetchSelectedItems()
  }

  fetchSelectedItems() {
    this.selectedItemsList = this.checkboxesDataList.filter((value, index) => {
      return value.isChecked
    });
  }

  fetchCheckedIDs() {
    this.medcond = []
    this.checkboxesDataList.forEach((value, index) => {
      if (value.isChecked) {
        this.medcond.push(value.id);
      }
    });
  }

  options = [
    "Bangalore",
    "Mumbai",
    "Chennai",
    "Kolkata",
    "Hyderabad",
    "Delhi"
  ];


}
