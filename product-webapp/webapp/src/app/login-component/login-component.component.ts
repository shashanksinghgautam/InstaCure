import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  @ViewChild("myform") public formref!: NgForm;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
   validate(ref: any):void{
    console.log(ref.user.value +"  "+ ref.pass.value);
    this.router.navigateByUrl('dashboard')
   }
}
