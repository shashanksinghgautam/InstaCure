import { Component, OnInit } from '@angular/core';
import {MedicineService} from '../medicine.service'
import { Medicine } from '../medicine';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class medicineComponent implements OnInit {

  Medicines: Medicine[] = [];
  constructor(private MedicineService: MedicineService) { }

  ngOnInit(): void {
    this.MedicineService.getMedicines().subscribe((data: Medicine[]) => {
      console.log(data);
      this.Medicines = data;
    });
  }
}