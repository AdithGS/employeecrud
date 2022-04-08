import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseUrl:string ="http://localhost:3000/Employee";
  constructor(private http :HttpClient) { }

  getEmployees(){
    return this.http.get(this.baseUrl);
  }

  createEmployee(user:any){
    return this.http.post(this.baseUrl,user);
  }

  getId(data:any){
    return this.http.get(`${this.baseUrl}/${data}`);
  }

  updateEmployee(id:number,data:any){
    return this.http.put(`${this.baseUrl}/${id}`,data);


  }

  deleteEmployee(id:number){
    return  this.http.delete(`${this.baseUrl}/${id}`)

  }


}
