import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  
  myGroup: FormGroup;
  constructor(private router: Router) { 
    this.myGroup = new FormGroup({
      symptoms : new FormControl("", [Validators.required, Validators.minLength(4)]),
      mnumber : new FormControl("",[
        Validators.required, 
        Validators.pattern('^[0-9]{10}$')
      ])
      
    });
  }

  ngOnInit(): void {
  }
  backMethod() {
    this.router.navigateByUrl("home");
  }

}
