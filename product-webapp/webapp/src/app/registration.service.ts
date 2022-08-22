import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  rid!:any
  Rrole!:any

  constructor(private http:HttpClient) { }

  public loginUserFromRemote(user:User):Observable<any>{
     return this.http.post("http://localhost:8080/login",user);
  }
  public getuserid(user:User):Observable<any>{
    return this.http.post("http://localhost:8080/user",user);
 }
 public getuserrole(user:User):Observable<any>{
  return this.http.post("http://localhost:8080/role",user);
}

  public registerUserFromRemote(user:User):Observable<any>{
    return this.http.post("http://localhost:8080/register",user);
 }



}
