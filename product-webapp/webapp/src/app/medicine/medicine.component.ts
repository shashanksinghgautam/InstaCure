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

  // Medicines: Medicine[] = [];
  Medicines!: Observable<Medicine[]>; 
  constructor(private MedicineService: MedicineService,private router: Router) { }

  ngOnInit(): void {
    // this.MedicineService.getMedicines().subscribe((data: Medicine[]) => {
    //   console.log(data);
    //   this.Medicines = data;
    // });
    this.reloadData();
  }
  

  

  

  reloadData() {
    this.Medicines = this.MedicineService.getMedicinesList();
  }

  deleteMedicine(id: number) {
    this.MedicineService.deleteMedicine(id)
      .subscribe(
        (        data: any) => {
          console.log(data);
          this.reloadData();
        },
        (        error: any) => console.log(error));
  }

  

  updateMedicine(id: number){
    this.router.navigate(['update', id]);
  }
}