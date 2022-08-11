import { Component, OnInit } from '@angular/core';
import {MedicineService} from '../medicine.service'
import { Medicine } from '../medicine';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class medicineComponent implements OnInit {



  ngOnInit(): void {
    // this.MedicineService.getMedicines().subscribe((data: Medicine[]) => {
    //   console.log(data);
    //   this.Medicines = data;
    // });
    
  }
  

  

  

  
}