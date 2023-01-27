import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  constructor(private fb: FormBuilder, private userService: UserService) { }

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
      (res) => { console.log(res);},
    ).catch((err) => {console.log(err);
    }); 
  }
}
