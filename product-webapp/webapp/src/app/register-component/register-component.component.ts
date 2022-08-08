import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent implements OnInit {

  myregform!: FormGroup;
  @ViewChild("myregform") public regformref!: NgForm;
  constructor(private router:Router) {

    this.myregform=new FormGroup(
      {
        uname:new FormControl("",[Validators.required,Validators.minLength(5)]),
        mail:new FormControl("",[Validators.required,Validators.email]),
        mobile:new FormControl("",[Validators.required,Validators.minLength(10)]),
        password:new FormControl("",[Validators.required,Validators.minLength(6)]),
        gender:new FormControl("",[Validators.required])
      }
     );

   }

  ngOnInit(): void {
  }
    myreg(){
      this.router.navigateByUrl('login')
    }
}
