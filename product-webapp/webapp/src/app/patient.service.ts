import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from './doctor-profile/Doctor';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private baseUrl1 = "http://localhost:7081/doctor/get";
  specality: any;
 

  constructor(private http:HttpClient) { }
  postSymptoms(symptom:any):Observable<any>{
    return this.http.post("http://localhost:8081/api/saveSymptoms",symptom,{responseType:'text' as 'json'});
  }
  getDoctors(): Observable<Doctor[]>{
       return this.http.get<Doctor[]>(`${this.baseUrl1}`);
     }
     setSpecality(x:any){
      this.specality=x;
     }
     getSpecality(){
      return this.specality;
     }

    
 
}
