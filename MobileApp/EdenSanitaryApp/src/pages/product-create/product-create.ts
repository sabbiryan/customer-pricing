import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Product } from '../../models/product';


@Component({
  selector: 'page-product-create',
  templateUrl: 'product-create.html',
})
export class ProductCreatePage {
  edit: boolean = null;
  model:Product;

  item:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let edit = navParams.get('edit');
    if(edit != undefined){
      this.edit = edit;
      this.model = navParams.get('item');
    }
    else{
      this.edit = false;
      this.model = new Product();
    }

  }

}
