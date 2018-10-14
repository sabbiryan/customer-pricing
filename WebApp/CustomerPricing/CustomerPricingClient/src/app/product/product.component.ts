import { Component, OnInit } from '@angular/core';


import { NotifierService } from 'angular-notifier';

import { ProductService } from "./product.service";
import { Product } from "./product.model";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [NotifierService, ProductService]
})
export class ProductComponent implements OnInit {

  list: Product[];
  model: Product;
  isUpdateMode: boolean;
  isCreateMode: boolean;

  constructor(private productService: ProductService,  private notifierService: NotifierService) {

    this.model = new Product();
    this.isUpdateMode = false;
    this.isCreateMode = false;
  }

  ngOnInit() {
    this.getProducts();
  }


  enableCreateMode() {
    this.model = new Product();
    this.isCreateMode = true;
    this.isUpdateMode = false;
  }

  getProducts() {

    this.productService.getAllEmployees()
      .subscribe(
        data => {

          this.list = data;
          console.log(data);
        },
        error => console.log(error)
      );
  }


  getProduct(id) {
    this.productService.getEmployee(id).subscribe(data => {
        this.model = data;
        this.notifierService.notify("info", "Data Loaded");
        this.isUpdateMode = true;
        this.isCreateMode = false;
      },
      error => {
        this.notifierService.notify("error", "Failed To Load Data!");
      });
  }


  updateProduct(isValid: boolean) {

    if (!isValid) {
      this.notifierService.notify("error", "Form validation failed!");
      return;
    }

    this.productService.updateEmployee(this.model)
      .subscribe(
        data => {
          console.log(data);
          this.model = new Product();
          this.notifierService.notify("success", "Update Success");
          this.getProducts();
          this.isUpdateMode = false;
          this.isCreateMode = false;
        },
        error => {
          console.log(error);
          this.notifierService.notify("error", `Update Failed! ${JSON.parse(error["_body"])["Message"]}`);
        }
      );
  };

  createProduct(isValid: boolean) {

    if (!isValid) {
      this.notifierService.notify("error", "Form validation failed!");
      return;
    }

    if (this.isUpdateMode) {
      this.updateProduct(isValid);
      return;
    }

    this.productService.createEmployee(this.model)
      .subscribe(
        data => {
          console.log(data);
          this.model = new Product();
          this.notifierService.notify("success", "Create Success");
          this.getProducts();
          this.isUpdateMode = false;
          this.isCreateMode = false;
        },
        error => {
          console.log(error);
          this.notifierService.notify("error", `Create Failed! ${JSON.parse(error["_body"])["Message"]}`);
        }
      );
  }


  deleteProduct(id) {
    this.productService.deleteEmployee(id).subscribe(data => {
        this.getProducts();
        this.notifierService.notify("info", "Delete Success");
      },
      error => {
        this.notifierService.notify("error", "Delete Failed!");
      });
  }

  cancel() {
    this.model = new Product();
    this.isUpdateMode = false;
    this.isCreateMode = false;
    this.notifierService.notify("default", "Calceled");
  }
}
