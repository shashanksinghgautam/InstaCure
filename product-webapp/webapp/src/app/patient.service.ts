import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Doctor } from './doctor-profile/Doctor';

import { Patient } from 'src/PatientProfile';


@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private baseUrl1 = "https://instacure.stackroute.io/doctor/get";
  specality: any;


  baseUrl="https://instacure.stackroute.io/patient/"

  constructor(private http:HttpClient) { }

  postSymptoms(symptom:any):Observable<any>{

    return this.http.post("https://instacure.stackroute.io/api/saveSymptoms",symptom,{responseType:'text' as 'json'});
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
    return this.http.put(`${this.baseUrl}patient/${id}`, value);
  }

  getPatient(id: number) {
    return this.http.get(`${this.baseUrl}get/${id}`);
  }
  getimage(id: number) {
    return this.http.get(`${this.baseUrl}Patient/image/${id}`);
  }

  uploadFile(id: number, file: any): Observable<Object> {
    var formdata = new FormData();
    formdata.append('imgFile', file);
    var requestOptions = {
      method: 'PUT',
      body: formdata,
    };
    var a: any;
    fetch(`${this.baseUrl}Patient/image/${id}`, requestOptions)
      .then((response) => (a = response))
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
    return a;
  }

}
