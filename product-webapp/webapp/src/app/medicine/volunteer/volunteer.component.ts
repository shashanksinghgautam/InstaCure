import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Medicine } from 'src/app/medicine';
import { ApiService } from './api.service';
import { MedicineService } from 'src/app/medicine.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css']
})
export class VolunteerComponent implements OnInit {

  Medicine: Medicine = new Medicine();
  submitted = false;

  constructor(private MedicineService: MedicineService,
    private router: Router) { }

  ngOnInit() {
  }

  newMedicine(): void {
    this.submitted = false;
    this.Medicine = new Medicine();
  }

  save() {
    this.MedicineService
    .createMedicine(this.Medicine).subscribe((data: any) => {
      console.log(data)
      this.Medicine = new Medicine();
      
    }, 
      (    error: any) => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

 

}
