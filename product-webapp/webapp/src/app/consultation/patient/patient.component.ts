import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientService } from 'src/app/patient.service';
import { PatientSymptoms } from '../patient-symptoms';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css'],
})
export class PatientComponent implements OnInit {
  val: any;
  x:any;
  patients:PatientSymptoms[]=[];
  s:PatientSymptoms=new PatientSymptoms();
  myGroup: FormGroup;
  constructor(private router: Router, private cservice:PatientService) {
    this.myGroup = new FormGroup({
      symptoms: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      specality:new FormControl('',[Validators.required]),
      mnumber: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]{10}$'),
      ]),
    });
  }

  ngOnInit(): void {
    // this.x = this.myGroup.get('symptoms')?.value;
  }
  backMethod() {
    this.router.navigateByUrl('home');
  }
  storeSymptoms() {
    this.s.symptoms=this.myGroup.value.symptoms;
    this.s.mobilenumber=this.myGroup.value.mnumber;
    this.s.specality=this.myGroup.value.specality;
    // this.s.dateAndTime=new Date().toUTCString();
    // console.log(this.s.dateAndTime);
    this.cservice.postSymptoms(this.s).subscribe(data=>{
      console.log(data);
    })
    
    // this.cservice.getVolunteers().subscribe(data=>{})
  }
}
