import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-patient-component',
  templateUrl: './patient-component.component.html',
  styleUrls: ['./patient-component.component.css']
})
export class PatientComponentComponent implements OnInit {

  constructor() { }
  patForm!: FormGroup;

  pat = {email: ""};
  ngOnInit(): void {
    this.patForm = new FormGroup({
      email: new FormControl(this.pat.email, [
        Validators.required,
      ])
    });
  }



}
