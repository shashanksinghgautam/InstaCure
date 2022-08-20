import { Component, OnInit } from '@angular/core';
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
  role!:String
  user=new User();
  title = 'Webapp';

  constructor(private route: ActivatedRoute,private router: Router,
    private rservice: RegistrationService , private loger:LoginComponentComponent ) { }

  goto()
  {

    this.route.params.subscribe((params: Params) => { this.appid = params['lid'];});
    console.log(this.appid)
  this.router.navigate(['volunteer-display',this.appid])

  }

}
