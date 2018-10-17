import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthenticationService } from '../../providers/authentication.service';
import { SignIn } from '../../models/signin';
import { PartyListPage } from '../party-list/party-list';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  model: SignIn;  
  error = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthenticationService) {
    this.model = new SignIn();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  login() {
    this.auth.login(this.model.username	, this.model.password)
      .subscribe(data => {
        this.navCtrl.push(PartyListPage);
        },
        error => {
          this.error = error.error_description;
        });
  }
}
