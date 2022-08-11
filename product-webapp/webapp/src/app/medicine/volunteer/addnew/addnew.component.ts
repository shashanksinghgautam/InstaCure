
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Medicine } from 'src/app/medicine';

import { MedicineService } from 'src/app/medicine.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addnew',
  templateUrl: './addnew.component.html',
  styleUrls: ['./addnew.component.css']
})
export class AddnewComponent implements OnInit {

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
    this.router.navigate(['medicine']);
  }

}
