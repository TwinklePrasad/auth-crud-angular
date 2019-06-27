import { Component, OnInit } from '@angular/core';
import * as jwt_decode from "jwt-decode";
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  return :any;
  userdata:any;
  constructor( private router: Router,
    private http:HttpClient) { }

  ngOnInit() {
   let data1 =localStorage.getItem('token')
    // console.log(data1);kye
     this.return = jwt_decode(data1);
     
     let id = this.return.id
     this.http.get("http://localhost:3000/getiuserid/" + id).subscribe((data:any) =>{
       this.userdata = data;
       console.log(this.userdata);
       if(this.userdata[0].kye == "admin"){
console.log("admin")
       }else{
console.log("user")
       }
     })
  }

}
