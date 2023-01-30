import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  goHome(){
    this.router.navigate(['/posts']);
  }

  onLogout(){
    this.userService.user = undefined;
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
