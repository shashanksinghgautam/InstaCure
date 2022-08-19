import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Volunteer } from '../volunteer';
import { VolunteerService } from '../volunteer.service';
import { User } from 'src/app/user';
@Component({
  selector: 'app-volunteer-display',
  templateUrl: './volunteer-display.component.html',
  styleUrls: ['./volunteer-display.component.css']
})
export class VolunteerDisplayComponent implements OnInit {

  searchText: string = '';
  Volunteers: any[]=[];
  volunteer: Volunteer = new Volunteer();

  constructor(
    private VolunteerService: VolunteerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
     this.VolunteerService.getVolunteers().subscribe(
      data=>{
        this.Volunteers=data;
        console.log(this.Volunteers[0].user)
      }
    );
  }
  UpdateProfile(id: number):void{
   
    this.router.navigate(['update-volunteer',id]);
  }
}
