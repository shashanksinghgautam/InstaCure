import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MedicineComponent } from './medicine.component';
import { Medicine } from './medicine';
@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  constructor() { }
  private baseUrl = "http://localhost:8080/api/medicine";

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Medicine[]>{
    return this.http.get<Medicine[]>(`${this.baseUrl}`);
  }
}
