import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from './Doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorProfileService {
  private baseUrl = "http://localhost:8085/doctor/add";
  private baseUrl1 = "http://localhost:8085/doctor/get";
  private baseUrl2 = "http://localhost:8085/doctor/get/{id}";

  
  constructor(private http: HttpClient) { }
  getDoctors(): Observable<Doctor[]>{
    return this.http.get<Doctor[]>(`${this.baseUrl}`);
  }
  updateDoctor(id: number, value: any) {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
  getDoctor(id: number) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  getimage(id: number) {
    return this.http.get(`${this.baseUrl1}${id}`);
  }
  sendimage(id: number,value:any) {
    // let headers = new HttpHeaders({
    //   'Content-Type':'multipart/form-data;boundary=gc0p4Jq0M2Yt08jU534c0p'
    //      });
    // let options = { headers: headers };
    return this.http.post(`${this.baseUrl1}${id}`,value);
  }
  
}
