import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Party } from '../../models/party';

/**
 * Generated class for the PartyCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-party-create',
  templateUrl: 'party-create.html',
})
export class PartyCreatePage {

  edit: boolean = null;
  model:Party;

  item:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let edit = navParams.get('edit');
    if(edit != undefined){
      this.edit = edit;
      this.model = navParams.get('item');
    }
    else{
      this.edit = false;
      this.model = new Party();
    }

  }

}
