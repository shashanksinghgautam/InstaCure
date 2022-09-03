import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }
  private emailURL = "https://instacure.stackroute.io/reg/Volunteer/email";

  getVolunteerEmails() {
    return this.http.get(`${this.emailURL}/`);
  }

  sendMail(email:any){
    return this.http.post("https://instacure.stackroute.io/email/send",email)
  }

 getMails():Observable<any>{
    return this.http.get("https://instacure.stackroute.io/email/allMails")
  }

  deleteMail(id: any): Observable<any> {
    return this.http.delete("https://instacure.stackroute.io/email/deletemail/"+id, { responseType: 'text' });
  }


}
