import { Component, OnInit } from '@angular/core';

import { NotifierService } from 'angular-notifier';

import { PartyService } from "./party.service";
import { Party } from "./party.model";


@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.css'],
  providers: [NotifierService]
})

export class PartyComponent implements OnInit {

  departments: Party[];
  model: Party;
  isCreateMode: boolean;
  isUpdateMode: boolean;

  constructor(private partyService: PartyService, private notifierService: NotifierService) {

    this.model = new Party();
    this.isUpdateMode = false;
    this.isCreateMode = false;
  }

  ngOnInit() {
    this.getAllDepartments();    
  }

  enableCreateMode() {
    this.model = new Party();
    this.isCreateMode = true;
    this.isUpdateMode = false;
  }


  getDepartment(id) {
    this.partyService.getDepartment(id).subscribe(data => {
        this.model = data;
        this.notifierService.notify("info", "Data Loaded");
        this.isUpdateMode = true;
        this.isCreateMode = false;
      },
      error => {
        this.notifierService.notify("error", "Failed To Load Data!");
      });
  }

  getAllDepartments() {

    this.partyService.getAllDepartments()
      .subscribe(
      data => {
        
          this.departments = data;
          console.log(data);
        },
        error => console.log(error)
      );
  }


  updateDepartment(isValid: boolean) {

    if (!isValid) {
      this.notifierService.notify("error", "Form validation failed!");
      return;
    }

    this.partyService.updateDepartment(this.model)
      .subscribe(
        data => {
          console.log(data);
          this.model = new Party();
          this.notifierService.notify("success", "Update Success");
          this.getAllDepartments();
          this.isUpdateMode = false;
          this.isCreateMode = false;
        },
        error => {
          console.log(error);
          this.notifierService.notify("error", "Update Failed! " + JSON.parse(error["_body"])["Message"]);
        }
      );
  };

  createDepartment(isValid: boolean) {

    if (!isValid) {
      this.notifierService.notify("error", "Form validation failed!");
      return;
    }

    if (this.isUpdateMode) {
      this.updateDepartment(isValid);
      return;
    }

    this.partyService.createDepartment(this.model)
      .subscribe(
        data => {
          console.log(data);
          this.model = new Party();
          this.notifierService.notify("success", "Create Success");
          this.getAllDepartments();
          this.isUpdateMode = false;
          this.isCreateMode = false;
        },
        error => {
          console.log(error);
          this.notifierService.notify("error", "Create Failed! " + JSON.parse(error["_body"])["Message"]);
        }
      );
  };



  deleteDepartment(id) {
    this.partyService.deleteDepartment(id).subscribe(data => {
      this.getAllDepartments();
      this.notifierService.notify("info", "Delete Success");
    },
      error => {
        this.notifierService.notify("error", "Delete Failed!");
      });
  }

  cancel() {
    this.model = new Party();
    this.isUpdateMode = false;
    this.isCreateMode = false;
    this.notifierService.notify("default", "Calceled");
  }
}
