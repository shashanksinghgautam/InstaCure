import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from './doctor-profile/Doctor';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private baseUrl1 = "http://localhost:7081/doctor/get";

  constructor(private http:HttpClient) { }
  postSymptoms(symptom:any):Observable<any>{
    return this.http.post("http://localhost:8080/api/saveSymptoms",symptom,{responseType:'text' as 'json'});
  }
  getVolunteers(): Observable<Doctor[]>{
       return this.http.get<Doctor[]>(`${this.baseUrl1}`);
     }
}
