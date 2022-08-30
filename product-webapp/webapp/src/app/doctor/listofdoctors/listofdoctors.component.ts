import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/doctor-profile/Doctor';
import { PatientService } from 'src/app/patient.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listofdoctors',
  templateUrl: './listofdoctors.component.html',
  styleUrls: ['./listofdoctors.component.css']
})
export class ListofdoctorsComponent implements OnInit {
  doctors :any[]=[];
 doctor : Doctor =new Doctor();
 p:any;
  constructor(private pservice:PatientService) { }

  ngOnInit(): void {
  
   
   
    this.pservice.getDoctors().subscribe((data=>{this.doctors=data
     
    
    
    
    }));
   
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
