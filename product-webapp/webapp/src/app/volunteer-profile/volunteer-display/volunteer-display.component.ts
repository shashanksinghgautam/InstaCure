import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Volunteer } from '../volunteer';
import { VolunteerService } from '../volunteer.service';
@Component({
  selector: 'app-volunteer-display',
  templateUrl: './volunteer-display.component.html',
  styleUrls: ['./volunteer-display.component.css']
})
export class VolunteerDisplayComponent implements OnInit {

  searchText: string = '';
  Volunteers!: Observable<Volunteer[]>;
  volunteer: Volunteer = new Volunteer();

  constructor(
    private VolunteerService: VolunteerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.Volunteers = this.VolunteerService.getVolunteers();
  }
  UpdateProfile(id: number):void{
   
    this.router.navigate(['update-volunteer',id]);
  }
}
