import { Component, OnInit } from '@angular/core';
import {MedicineService} from '../medicine.service'
import { Medicine } from '../medicine';

@Component({
  selector: 'app-Medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent implements OnInit {

  Medicine: Medicine[] =[];
  constructor(private MedicineService: MedicineService) { }

  ngOnInit(): void {
    this.MedicineService.getMedicines().subscribe((data: Medicine[]) => {
      console.log(data);
      this.Medicine = data;
    });
  }
}