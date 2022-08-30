import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }
  private emailURL = "http://localhost:8086/reg/Volunteer/email";

  getVolunteerEmails() {
    return this.http.get(`${this.emailURL}/`);
  }

//   sendEmailList(List: any){
//     return this.http.post("http://localhost:8090/getEmails",List)
//  }

  sendMail(email:any){
    return this.http.post("http://localhost:8086/send",email)
  }
}
