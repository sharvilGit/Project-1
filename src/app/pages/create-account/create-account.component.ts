import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  createForm = this.fb.group({
    fname: new FormControl('', [Validators.required]),
    lname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', [Validators.required, Validators.maxLength(8)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  create() {
    this.userService.createUser(this.createForm.value).then(
      (res) => { 
        console.log(res);
        console.log("Account created successfully");
        this.userService.user = res;
        localStorage.setItem('user', JSON.stringify(res));
        this.snackBar.open('Account Created Successfully!', 'Done', { duration: 2000 });
        this.router.navigate(['/posts']);
      },
    ).catch((err) => {console.log(err);
    }); 
  }
}
