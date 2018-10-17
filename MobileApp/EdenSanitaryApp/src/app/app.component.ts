import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { PartyListPage } from '../pages/party-list/party-list';
import { ProductListPage } from '../pages/product-list/product-list';
import { AuthenticationService } from '../providers/authentication.service';
import { LoginPage } from '../pages/login/login';
import { LocalStorageService } from '../providers/localstorage.service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = PartyListPage;
  isSignedIn: boolean = false;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private auth: AuthenticationService, private localStorage: LocalStorageService) {

    this.isSignedIn = this.localStorage.isSignedIn();

    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      // { title: 'Home', component: HomePage },
      // { title: 'List', component: ListPage },
      { title: 'Party List', component: PartyListPage },
      { title: 'Product List', component: ProductListPage }
    ];
  }

  initializeApp() {

    if (this.localStorage.isSignedIn())
      this.rootPage = PartyListPage;
    else
      this.rootPage = LoginPage;

    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logout() {
    this.auth.logout();
    this.nav.setRoot(LoginPage);
    this.nav.popToRoot();
  }
}
