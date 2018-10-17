import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { NotifierService } from 'angular-notifier';

import { Product } from "../product/product.model";
import { Party } from "../party/party.model";
import { PartyPricing } from "./party-pricing.model";

import { PartyPricingService } from "./party-pricing.service";



@Component({
  selector: 'app-party-pricing',
  templateUrl: './party-pricing.component.html',
  styleUrls: ['./party-pricing.component.css'],
  providers: [NotifierService]
})
export class PartyPricingComponent implements OnInit {

  list: PartyPricing[];
  model: PartyPricing;
  isCreateMode: boolean;
  isUpdateMode: boolean;

  constructor(private partyPricingService: PartyPricingService,
    private notifierService: NotifierService,
    private route: ActivatedRoute) {

    this.model = new PartyPricing();
    this.isCreateMode = false;
    this.isUpdateMode = false;
  }

  ngOnInit() {
    this.getPartyPricings();
  }



  enableCreateMode() {
    this.model = new PartyPricing();
    this.isCreateMode = true;
    this.isUpdateMode = false;
  }


  //getDepartment(id) {

  //  this.departmentService.getDepartment(id).subscribe(data => {
  //      console.log(data);
  //      this.department = data;        
  //      this.notifierService.notify("info", "Data Loaded");
  //      this.isUpdateMode = false;
  //      this.isCreateMode = false;
  //    },
  //    error => {
  //      this.notifierService.notify("error", "Failed To Load Data!");
  //    });
  //}

  getPartyPricings() {
    this.partyPricingService.getAllDepartments().subscribe(data => {
      debugger;
      this.list = data;
      this.isUpdateMode = false;
      this.isCreateMode = false;
    },
      error => {
        this.notifierService.notify("error", "Failed To Load Data!");
      });
  }


  getPartyPricing(id) {
    this.partyPricingService.getDepartment(id).subscribe(data => {
      this.model = data;
      this.isUpdateMode = true;
      this.isCreateMode = false;
      this.notifierService.notify("info", "Data Loaded");
    },
      error => {
        this.notifierService.notify("error", "Failed To Load Data!");
      });
  }


  updatePartyPricing(isValid: boolean) {

    if (!isValid) {
      this.notifierService.notify("error", "Form validation failed!");
      return;
    }

    this.partyPricingService.updateDepartment(this.model)
      .subscribe(
        data => {
          console.log(data);
          this.model = new PartyPricing();
          this.notifierService.notify("success", "Update Success");
          //this.getDepartment(this.route.snapshot.params["id"]);
          this.isUpdateMode = false;
        },
        error => {
          console.log(error);
          this.notifierService.notify("error", "Update Failed!");
        }
      );
  };

  createPartyPricing(isValid: boolean) {

    if (!isValid) {
      this.notifierService.notify("error", "Form validation failed!");
      return;
    }

    if (this.isUpdateMode) {
      this.updatePartyPricing(isValid);
      return;
    }

    this.partyPricingService.createDepartment(this.model)
      .subscribe(
        data => {
          console.log(data);
          this.model = new PartyPricing();
          this.notifierService.notify("success", "Create Success");
          //this.getDepartment(this.route.snapshot.params["id"]);
          this.isUpdateMode = false;
        },
        error => {
          console.log(error);
          this.notifierService.notify("error", "Create Failed!");
        }
      );
  };



  deletePartyParicing(id) {
    this.partyPricingService.deleteDepartment(id).subscribe(data => {
      //this.getDepartment(this.route.snapshot.params["id"]);
      this.notifierService.notify("info", "Delete Success");
    },
      error => {
        this.notifierService.notify("error", "Delete Failed!");
      });
  }

  cancel() {
    this.model = new PartyPricing();
    this.isUpdateMode = false;
    this.isCreateMode = false;
    this.notifierService.notify("default", "Calceled");
  }
}
