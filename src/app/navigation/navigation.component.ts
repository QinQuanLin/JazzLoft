//Amber
import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Location } from '@angular/common';
import * as $ from 'jquery';
import { ConfigService } from '../config.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, AfterContentChecked {

  menu: any;
  isloggedIn: boolean;
  database = 'menu';
  menuOpen: boolean;
  profileImage: string;
  user: any;

  constructor(private location: Location,
    private auth: AuthenticationService,
    private config: ConfigService) { }

  ngOnInit() {

    this.getMenu(this.database); //want all values so don't pass id
    this.menuOpen = false;
    this.isloggedIn = this.auth.isloggedIn();
    this.getUser();

  }

  ngAfterContentChecked() { //every time auth changes, call getUser, which changes the profile icon.
    of(this.auth.isloggedIn).subscribe(
      () => {
        this.getUser();
      }
    )
  }

  getMenu(database) {
    this.config.getSettings(database).subscribe(
      settings => {
        this.menu = settings;
        console.log(settings);
      }
    );
  }

  getUser() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    if (this.user) {
      this.profileImage = this.user.image;
    }
    else {
      this.profileImage = 'default-user.jpg';
    }
  }

  toggleMenu(state) {
    this.menuOpen = state;
  }

  logout() {
    this.auth.logout();
  }
}
