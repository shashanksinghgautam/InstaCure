import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from 'src/PatientProfile';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  baseUrl="http://localhost:8082/patient/"

  constructor(private http:HttpClient) { }

  postSymptoms(symptom:any):Observable<any>{
    return this.http.post("http://localhost:8085/api/saveSymptoms",symptom,{responseType:'text' as 'json'});
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
