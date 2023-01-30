import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(public userService: UserService, private router: Router) { }

  ngOnInit() {
    if(this.userService.user == undefined || this.userService.user == null){
      //taking user from localStorage
      let str = localStorage.getItem('user');
      console.log(str);
      if(str != null){
        this.userService.user = JSON.parse(str);
      }else{
        this.router.navigate(['/login']); 
      }
    }
  }

}
