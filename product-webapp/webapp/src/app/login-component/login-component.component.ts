import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

   user=new User();

  @ViewChild("myform") public formref!: NgForm;
  constructor(private router:Router,private service:RegistrationService) { }

  ngOnInit(): void {
  }
   validate(ref: any):void{
    console.log(ref.user.value +"  "+ ref.pass.value);
    this.router.navigateByUrl('dashboard')
   }

   loginUser(){

   }
}
