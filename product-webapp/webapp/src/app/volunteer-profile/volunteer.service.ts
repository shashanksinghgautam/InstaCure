import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Volunteer } from './volunteer';

@Injectable({
  providedIn: 'root'
})
export class VolunteerService {



  private baseUrl = "http://localhost:8081/api/Volunteer";

  private baseUrl1 = "http://localhost:8081/api/Volunteer/image";

  



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
