import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http:HttpClient) { }
  postSymptoms(symptom:any):Observable<any>{
    return this.http.post("http://localhost:8080/api/saveSymptoms",symptom,{responseType:'text' as 'json'});
  }
}
