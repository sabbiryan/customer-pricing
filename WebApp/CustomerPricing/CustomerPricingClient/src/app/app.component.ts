import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from "./services/authentication.service";
import { LocalStorageService } from "./services/localstorage.service";
import { EventService } from "./services/events/event.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})



export class AppComponent {
  title = 'Party Pricing';

  isSignedIn: boolean = false;

  ngOnInit() {
    this.checkEvents();
  }

  constructor(private authenticationService: AuthenticationService,
    private router: Router,
    private localStorage: LocalStorageService, private eventService: EventService<any>) {

    this.isSignedIn = this.localStorage.isSignedIn();
    this.routeToSigninIfRequired();
  }


  changeOfRoutes() {        
    this.checkEvents();
    this.routeToSigninIfRequired();
  }

  checkEvents() {
    this.eventService.GetEvent("SignIn").subscribe((data) => {
      this.isSignedIn = this.localStorage.isSignedIn();
    });

  }

  signout() {
    this.authenticationService.logout();
    this.router.navigate(["/signin"]);
  }


  private routeToSigninIfRequired() {
    this.isSignedIn = this.localStorage.isSignedIn();
    if (this.isSignedIn === false) {
      this.router.navigate(["/signin"]);
    }
  }
}
