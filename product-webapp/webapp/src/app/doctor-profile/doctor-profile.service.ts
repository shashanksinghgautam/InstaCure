import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from './Doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private baseUrl = "http://localhost:8085/doctor/add";
  private baseUrl1 = "http://localhost:8085/doctor/DoctorProfile";
  private baseUrl2 = "http://localhost:8085/doctor/get";


  constructor(private http: HttpClient) { }

  getDoctors(): Observable<Doctor[]>{
    return this.http.get<Doctor[]>(`${this.baseUrl1}`);
  }
  updateDoctor(id: number, value: any) {
    return this.http.put(`${this.baseUrl1}/${id}`, value);
  }
  getDoctor(id: number) {
    return this.http.get(`${this.baseUrl2}/${id}`);
  }
  getimage(id: number) {
    return this.http.get(`${this.baseUrl1}${id}`);
  }
  sendimage(id: number,value:any) {
    // let headers = new HttpHeaders({
    //   'Content-Type':'multipart/form-data;boundary=gc0p4Jq0M2Yt08jU534c0p'
    //      });
    // let options = { headers: headers };
    return this.http.post(`${this.baseUrl}${id}`,value);
  }

}
