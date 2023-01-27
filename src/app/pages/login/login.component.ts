import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder, private userService: UserService, private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  hide = true;

  getUser(){
    this.userService.getUser(this.loginForm.value.email).then(
      (res) => { 
        console.log(res);
       if(res[0].password === this.loginForm.value.password){
        console.log("Login Success!");
        this.snackBar.open('Login Successfull!', 'Done')
       }else{
        console.log("Incorrect Password!");
        this.snackBar.open("Incorrect Password!", "Done")
       }
      }
    ).catch(
      (err) => { console.log(err);}
    );
  }
  
}
