import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employee:Employee[];
  constructor(private http:HttpClient) { }


  httpOptions = {
   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
 };
  

 private EmployeeUrl = 'http://localhost:3000/employees';
 

 /** GET Travel from the server */
 getEmployees(): Observable<Employee[]> {
   return this.http.get<Employee[]>(this.EmployeeUrl, this.httpOptions)
 }

 
 getEmployee(id: String): Observable<Employee> {
   const url = `${this.EmployeeUrl}/${id}`;
   return this.http.get<Employee>(url)
 }


 addEmployee(employeeUrlObj: Employee): Observable<Employee> {
   // console.log(driverObj);
   return this.http.post<Employee>(this.EmployeeUrl, employeeUrlObj, this.httpOptions)
 }


 public updateEmployee(employeeUrlObj: Employee){
   console.log(employeeUrlObj);
   return this.http.put(`${this.EmployeeUrl}/${employeeUrlObj._id}`, employeeUrlObj, this.httpOptions);
}


  //DELETE: delete the hero from the server

   
  delete(id: String): Observable<Employee> {
    const url = `${this.EmployeeUrl}/${id}`;
    return this.http.delete<Employee>(url, this.httpOptions)
}
}
