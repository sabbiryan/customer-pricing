import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductCreatePage } from '../product-create/product-create';
import { Product } from '../../models/product';

@Component({
  selector: 'page-product-list',
  templateUrl: 'product-list.html'
})
export class ProductListPage {
    items: Product[];
    filterItems:Product[];

    //Array<{name: string, contact: string}>;
  constructor(public navCtrl: NavController) {
    this.items = [];
    this.filterItems = [];
    this.initializeItems();
  }

  initializeItems(){
    for (let i = 1; i < 11; i++) {
      this.items.push({id:i, name: 'Product ' + i,price:"200"});
    }
    this.filterItems = this.items;
}

  itemSelected(event,item: any) {
    this.navCtrl.push(ProductCreatePage, {
      item: item,edit:true
    });
  }

  openProductCreatePage(){
    this.navCtrl.push(ProductCreatePage);
  }

  searchItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();
    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.filterItems = this.items.filter((item) => {
        return((item.name && item.name.toLowerCase().indexOf(val.toLowerCase()) != -1)  );
       // return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
