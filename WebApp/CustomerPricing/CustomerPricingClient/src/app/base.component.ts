import { Component, Injectable, OnInit } from '@angular/core';
import { NotifierService } from "angular-notifier";

@Injectable()
export class ComponentBase implements OnInit {


  constructor(public  notifierService: NotifierService) {
    
  }

  ngOnInit() {
    
  }

  showError(error) {
    this.notifierService.notify("error", "Create Failed! " + JSON.parse(error["_body"])["Message"]);
  }


}
