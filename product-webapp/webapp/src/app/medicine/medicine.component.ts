import { Component, OnInit } from '@angular/core';
import { MedicineService } from '../medicine.service';
import { Medicine } from '../medicine';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css'],
})
export class medicineComponent implements OnInit {
  searchText: string = '';
  Medicines!: Observable<Medicine[]>;
  Medicine: Medicine = new Medicine();

  constructor(
    private MedicineService: MedicineService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.Medicines = this.MedicineService.getMedicinesList();
  }

  buyMedicine(id: number) {
    // let qnt = document.querySelector('input')?.value;

    let qnt = document.getElementsByTagName('input')[id - 1].value;

    console.log(qnt);
    this.MedicineService.buyMedicine(id, qnt).subscribe(
      (data: any) => {
        console.log(data);
        this.Medicine = new Medicine();
      },

      (error: any) => console.log(error)
    );
    alert('sucessfully purchased ' + qnt + ' ' + this.Medicine.medicinename);
    window.location.reload();
  }
}

function qnt(id: number, qnt: any) {
  throw new Error('Function not implemented.');
}
