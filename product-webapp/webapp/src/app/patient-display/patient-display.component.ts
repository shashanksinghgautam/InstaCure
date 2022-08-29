import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/PatientProfile';
import Swal from 'sweetalert2';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-display',
  templateUrl: './patient-display.component.html',
  styleUrls: ['./patient-display.component.css'],
})
export class PatientDisplayComponent implements OnInit {

  id = Number(localStorage.getItem('lid'));

  Patients: any[] = [];
  patient = new Patient();

  constructor(private patientService: PatientService, private router: Router) {}

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.patientService.getPatient(this.id).subscribe((data) => {
      this.Patients.push(data);
    });
  }
  UpdateProfile(id: number): void {
    console.log(id);

    this.router.navigate(['patient-component', id]);
  }


  reloadData() {


    this.patientService.getPatient(this.id).subscribe(
     data=>{
       this.Patients.push(data);
       console.log(data);

     }
   );


 }
clearStorage(){
  localStorage.removeItem("lid");
  localStorage.removeItem("role");
}

  clearStorage() {
    Swal.fire(
      'Successfully logged out',
      'Click on Login Button to Login',
      'success'
    );
    localStorage.clear();
  }
}
