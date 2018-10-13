import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class LocalStorageService {

  private currentUserKey : string = "currentUser";

  constructor() {
    
  }

  setCurrentUser(user: any) {
    localStorage.setItem(this.currentUserKey, JSON.stringify(user));
  }

  getCurrentUser() {
    let currentUser = JSON.parse(localStorage.getItem(this.currentUserKey));

    return currentUser;
  }


  deleteCurrentUser() {
    localStorage.removeItem(this.currentUserKey);
  }



  isSignedIn() : boolean {

    let currentUser = this.getCurrentUser();

    if (currentUser && currentUser["access_token"]) return true;

    return false;
  }



}
