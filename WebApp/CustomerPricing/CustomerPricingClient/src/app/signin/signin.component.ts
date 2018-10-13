import { Component, OnInit } from '@angular/core';

import { AuthenticationService} from "../services/authentication.service";
import { Router, ActivatedRoute } from '@angular/router';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from "rxjs/operators";
import { Subscription } from "rxjs";

import { SignIn } from "./_models/signIn";

import {EventService} from "../services/events/event.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  busy: Subscription;

  //loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  model: SignIn;  

  constructor(
    //private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService, private eventService: EventService<any>) {

    this.model = new SignIn();
  }

  ngOnInit() {
    //this.loginForm = this.formBuilder.group({
    //  username: ['', Validators.required],
    //  password: ['', Validators.required]
    //});

    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }




  signin(isValid: boolean) {    
    this.loading = true;
    this.busy =  this.authenticationService.login(this.model.UserName, this.model.Password)
      .pipe(first())
      .subscribe(
        data => {
          this.eventService.BroadcastEvent("SignIn", data);
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.error = error;
          this.loading = false;
        });
  }






  // convenience getter for easy access to form fields
  //get f() { return this.loginForm.controls; }

  //onSubmit() {
  //  this.submitted = true;

  //  // stop here if form is invalid
  //  if (this.loginForm.invalid) {
  //    return;
  //  }

  //  this.loading = true;
  //  this.authenticationService.login(this.f.username.value, this.f.password.value)
  //    .pipe(first())
  //    .subscribe(
  //      data => {
  //        this.router.navigate([this.returnUrl]);
  //      },
  //      error => {
  //        this.error = error;
  //        this.loading = false;
  //      });
  //}

}
