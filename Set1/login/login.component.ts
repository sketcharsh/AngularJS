import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isValid=false
  message=""

  loginAction(userName : String,password : String){
    if(userName == "admin" && password == "admin"){
      this.message="Successfully Login."
      this.isValid=true
    }
    else{
      this.message="Login Fail"
      this.isValid=false
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
