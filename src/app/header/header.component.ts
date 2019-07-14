import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { AuthService } from '../auth.service';

import { HttpClient } from '@angular/common/http'
import * as jwt_decode from "jwt-decode";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  return: any;
  admin: any;
   userdata: any;
  constructor(private router: Router,
    private http: HttpClient) { }

  ngOnInit() {
    let data1 = localStorage.getItem('token')
    // console.log(data1);kye
    this.return = jwt_decode(data1);

    let id = this.return.id
    this.http.get("http://localhost:3000/getiuserid/" + id).subscribe((data: any) => {
      this.userdata = data;
      console.log(this.userdata);
      if (this.userdata[0].user_type === "admin") {
        this.admin = true;
      }
      else if (this.userdata[0].user_type === "employee") {
        this.admin = false;
      } else {
        this.admin = false;
      }
      console.log(this.userdata);
    })
  }

  logoutUser() {
    localStorage.removeItem("token")
    this.router.navigate(['login']);
  }

}
