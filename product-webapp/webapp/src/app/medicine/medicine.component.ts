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
  qnt!:any;
  searchText: string = '';
  Medicines!: Observable<Medicine[]>;
  Medicine: Medicine = new Medicine();
  role:any = localStorage.getItem("role")
  formValue: any;
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

  buyMedicine(id: number ) {


    // let qnt = document.getElementsByTagName('input')[id].value;

    console.log(this.qnt);
    this.MedicineService.buyMedicine(id, this.qnt).subscribe(
      (data: any) => {
        console.log(data);
        this.Medicine = new Medicine();
      },

      (error: any) => console.log(error)
    );
    console.log(this.Medicine.medicinename)
    alert('sucessfully purchased ' + this.qnt + ' ' + 'Medicines');
    window.location.reload();
  }

  goToEmail(){
     this.router.navigate(['/email-notification']);
  }
}


