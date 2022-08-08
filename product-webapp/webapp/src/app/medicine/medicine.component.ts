import { Component, OnInit } from '@angular/core';
import { Medicine } from './medicine';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css','./css/bootstrap.css','./css/responsive.css','./css/style.css','./css/style.scss']
})
export class MedicineComponent implements OnInit {

  medicine: Medicine[] | undefined;
  constructor(private MedicineService: MedicineService) { }

  ngOnInit(): void {
    this.MedicineService.getmedicine().subscribe((data: Medicine[]) => {
      console.log(data);
      this.medicine = data;
    });
  }

}
