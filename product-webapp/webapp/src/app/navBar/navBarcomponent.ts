import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { LoginComponentComponent } from '../login-component/login-component.component';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-navBar',
  templateUrl: './navBarcomponent.html',
  styleUrls: ['./navBar.component.css']
})
export class NavBarComponent implements OnInit {




  ngOnInit(): void {

  }


  appid!:number
  appidstring!:string
  role!:String
  user=new User();
  title = 'Webapp';

  constructor(private route: ActivatedRoute,private router: Router,
    private rservice: RegistrationService , private loger:LoginComponentComponent ) { }

  goto()
  {


   console.log(localStorage.getItem("lid"));



    if (localStorage.getItem("role")=='Volunteer')
    {
      this.router.navigate(['volunteer-display',localStorage.getItem("lid")])
    }
    if (localStorage.getItem("role")=='Doctor')
    {
      this.router.navigate(['doctor-display',localStorage.getItem("lid")])
    }
    if (localStorage.getItem("role")=='Patient')
    {
      this.router.navigate(['patient-display',localStorage.getItem("lid")])
    }


  }
  gohome()
  {

   console.log(localStorage.getItem("lid"));
   console.log(localStorage.getItem("role"));
   this.router.navigate(['landing-page'])


  }



}
