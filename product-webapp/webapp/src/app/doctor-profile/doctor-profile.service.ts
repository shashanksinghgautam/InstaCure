import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from './Doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorProfileService {
  private baseUrl = "http://localhost:7081/doctor/add";
  private baseUrl1 = "http://localhost:7081/doctor/get";
  private baseUrl2 = "http://localhost:7081/doctor/get/{id}";

  
  constructor(private http: HttpClient) { }
  addDoctor(doctor:Doctor): Observable<Object> {
    console.log(doctor);
    return this.http.post(`${this.baseUrl}`,doctor);
 }

  // getVolunteers(): Observable<Volunteer[]>{
  //   return this.http.get<Volunteer[]>(`${this.baseUrl}`);
  // }
  // updateDoctor(id: number, value: any) {
  //   return this.http.put(`${this.baseUrl}/${id}`, value);
  // }
  // getVolunteer(id: number) {
  //   return this.http.get(`${this.baseUrl}/${id}`);
  // }

  
}
