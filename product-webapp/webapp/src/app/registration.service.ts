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
 public saveidandroletoDb(user:User): Observable<any> {
  let headers = new HttpHeaders();
  headers = headers.set('Content-Type', 'application/json');
  return this.http.post("http://localhost:3000/user",user,{headers: headers});
}

public getIdandRole(): Observable<any> {
  return this.http.get("http://localhost:3000/user");
}

// Implement deleteIssue method to delete a issue by id
public deleteDb(id: any): Observable<any> {
  return this.http.delete("http://localhost:3000/user"+"/"+id+"/");
}


}
