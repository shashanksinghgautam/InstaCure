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

   id =Number(localStorage.getItem("lid"))
   
  searchText: string = '';
  Volunteers: any[]=[]
  volunteer= new Volunteer();
  // volunteer:object = new Volunteer()
 
  
  
  constructor(
    private VolunteerService: VolunteerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    
    
     this.VolunteerService.getVolunteer(this.id).subscribe(
      data=>{
        this.Volunteers.push(data);
        
      }
    );

    // this.VolunteerService.getVolunteer(this.id).subscribe(
    //   data=>{
    //     this.volunteer=data ;
    //   }
    // )
   
  }
  UpdateProfile(id: number):void{
   
    this.router.navigate(['update-volunteer',id]);
  }
}
