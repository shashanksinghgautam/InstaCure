import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Volunteer } from './volunteer';

@Injectable({
  providedIn: 'root'
})
export class VolunteerService {



  private baseUrl = "http://localhost:8081/api/Volunteer";

  constructor(private http: HttpClient) { }

  getVolunteers(): Observable<Volunteer[]>{
    return this.http.get<Volunteer[]>(`${this.baseUrl}`);
  }
  updateVolunteer(id: number, value: any) {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
  getVolunteer(id: number) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}
