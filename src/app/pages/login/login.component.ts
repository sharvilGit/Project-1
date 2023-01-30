import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder, private userService: UserService, private snackBar: MatSnackBar, private router: Router) { }

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
        this.userService.user = res[0];
        this.snackBar.open('Login Successfull!', 'Done', {duration: 2000});
        localStorage.setItem('user', JSON.stringify(res[0]));
        this.router.navigate(['/posts']);
       }else{
        this.snackBar.open("Incorrect Password!", "Done", {duration: 2000})
       }
      }
    ).catch(
      (err) => { console.log(err);}
    );
  }
  
}
