
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Medicine } from './medicine';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {
  //  input = document.getElementById('Quantity') as HTMLInputElement | null;

  //  qnt = this.input?.value;

  private baseUrl = "http://localhost:8080/api/medicine";

  constructor(private http: HttpClient) { }

  getMedicines(): Observable<Medicine[]>{
    return this.http.get<Medicine[]>(`${this.baseUrl}`);
  }
  getMedicine(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createMedicine(Medicine: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, Medicine);
  }
  updateMedicine(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
  buyMedicine(id: number, qnt:any): Observable<Object> {
    
    console.log(qnt);
    return this.http.put(`${this.baseUrl}/buy/${id}/${qnt}`,{});
  }

  deleteMedicine(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getMedicinesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}