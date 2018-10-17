import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-party-detail',
  templateUrl: 'party-detail.html'
})
export class PartyDetailPage {
  item: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.item = navParams.get('item');
    console.log(this.item);
  }


}
