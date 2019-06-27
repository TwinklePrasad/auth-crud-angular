import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http'
import * as jwt_decode from "jwt-decode";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logindata:any;
  loginUserData = {}

  constructor(private _auth: AuthService,
              private router: Router,
              private http:HttpClient) { }

  ngOnInit() {
  }

 /* loginUser () {
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token)
        this._router.navigate(['/admin'])
      },
      err => console.log(err)
    ) 
 }*/
  loginUser(){
    this.http.post("http://localhost:3000/logindata", this.loginUserData).subscribe((data:any) =>{
      this.logindata = data;
     
      localStorage.setItem('token', this.logindata.token);
     // let data1 =localStorage.getItem('token')
     // console.log(data1)
     this.router.navigate(['admin']);
    })
   // console.log(this.registerUserData);
  }
}
