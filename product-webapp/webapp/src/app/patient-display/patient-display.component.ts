import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-display',
  templateUrl: './patient-display.component.html',
  styleUrls: ['./patient-display.component.css']
})
export class PatientDisplayComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  UpdateProfile():void{
    const navigationDetails: string[] = ['/patient-component'];
    this.router.navigate(navigationDetails);
  }

}
