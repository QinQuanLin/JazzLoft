import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  user: any;
  isLoggedIn: boolean;

  constructor(private route: Router) { }

  ngOnInit(): void {
    this.getUser();
  }
  getUser() {
    if (localStorage.getItem('currentUser')) {

      this.user = JSON.parse(localStorage.getItem('currentUser'));
      console.log("user is", this.user);
      this.isLoggedIn = true;
    }
  }
  logout() {
    localStorage.removeItem('currentUser');
    this.isLoggedIn = false;
    this.route.navigate(['/home']);
  }

}
