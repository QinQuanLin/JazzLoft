//This file is for signup
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, NgForm, FormBuilder } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthenticationService, private router: Router) {

   }
// let user to input firstName, lastName, email, and password. It check that those informations are valid or not
  ngOnInit(): void {
    this.signupForm = this.fb.group({
      'firstName': [null, Validators.required],
      'lastName': [null, Validators.required],
      'email': [null, [Validators.required, Validators.email]],
      'password': [null, Validators.required],
    });
  }
  signup(formData: NgForm) {
    return this.auth.signup(formData).subscribe(
      (user)=> {
        console.log(`added user ${JSON.stringify(user)}`);
        this.router.navigate(['login']);
      }
    );
  }
}
