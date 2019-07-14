import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  logindata:any;
  registerUserData = {}
  constructor(private _auth: AuthService,
              private _router: Router,
              private http:HttpClient) { }

  ngOnInit() {
  }
/*
  registerUser() {
    this._auth.registerUser(this.registerUserData)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token)
       // this._router.navigate(['/login'])
      },
      err => console.log(err)
    )      
  }
*/


registerUser(){
  this.http.post("http://localhost:3000/login", this.registerUserData).subscribe((data:any) =>{
    this.logindata = data;
    this._router.navigate(['/login'])
  })
 console.log(this.registerUserData);
}
}
