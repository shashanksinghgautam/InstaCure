import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Doctor } from './doctor-profile/Doctor';

import { Patient } from 'src/PatientProfile';


@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private baseUrl1 = "http://localhost:7081/doctor/get";
  specality: any;
 

  baseUrl="http://localhost:8082/patient/"

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

    
 

    
  

  getPatients(): Observable<Patient[]>{
    return this.http.get<Patient[]>(`${this.baseUrl}`);
  }
  updatePatient(id: number, value: any) {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  getPatient(id: number) {
    return this.http.get(`${this.baseUrl}get/${id}`);
  }


}
