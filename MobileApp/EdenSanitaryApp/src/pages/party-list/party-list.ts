import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PartyDetailPage } from '../party-detail/party-detail';
import { PartyCreatePage } from '../party-create/party-create';
import { Party } from '../../models/party';

@Component({
  selector: 'page-party-list',
  templateUrl: 'party-list.html'
})
export class PartyListPage {
    items: Party[];
    filterItems:Party[];

    //Array<{name: string, contact: string}>;
  constructor(public navCtrl: NavController) {

    this.items = [];
    this.filterItems = [];
    this.initializeItems();
  }

  initializeItems(){
    for (let i = 1; i < 11; i++) {
      this.items.push({
        id:i,
        name: 'Customer ' + i,
        contact: '01850495477',
        bazar:"Senbag Bazar",
        proprietor:"Mr. Sah Alam",
        address:"Senbag, Noakhali"
      });
    }
    this.filterItems = this.items;
}
  itemSelected(event,item: any) {
    this.navCtrl.push(PartyCreatePage, {
      item: item,edit:true
    });
  }

  openPartyCreatePage(){
    this.navCtrl.push(PartyCreatePage);
  }

  searchItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();
    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.filterItems = this.items.filter((item) => {
        return((item.name && item.name.toLowerCase().indexOf(val.toLowerCase()) != -1) ||
        (item.contact && item.contact.toLowerCase().indexOf(val.toLowerCase()) != -1) ||
         (item.bazar && item.bazar.toLowerCase().indexOf(val.toLowerCase()) != -1) ||
         (item.proprietor && item.proprietor.toLowerCase().indexOf(val.toLowerCase()) > -1));
       // return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
