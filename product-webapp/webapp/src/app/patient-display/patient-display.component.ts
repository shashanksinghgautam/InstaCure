import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/PatientProfile';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-display',
  templateUrl: './patient-display.component.html',
  styleUrls: ['./patient-display.component.css']
})
export class PatientDisplayComponent implements OnInit {

  //premed:any[]=[];

  premed=['Cholestrol', 'Asthama'];
  // dob:any='12-08-2020';
  // address:any="qwe";
  // city:any="Bangalore";
  // postal:any=123456;

  id =Number(localStorage.getItem("lid"))

  searchText: string = '';
  Patients: any[]=[]
  Patient= new Patient();

  constructor( private patientService: PatientService,
    private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  UpdateProfile(id:number):void{

    this.router.navigate(['patient-component',id]);
  }

  reloadData() {


    this.patientService.getPatient(this.id).subscribe(
     data=>{
       this.Patients.push(data);
       console.log(data);

     }
   );


 }

}
