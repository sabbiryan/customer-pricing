import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class UrlService {

  baseUrl: string = "http://localhost:57005/";  
  tokenApi: string = this.baseUrl + "Token";

  baseApi: string = this.baseUrl + "api/";
  
  constructor() {
    
  }

  accountApi: string = this.baseApi + "Account";
  userApi: string = this.baseApi + "User";
  productApi: string = this.baseApi + "Product";
  partyApi: string = this.baseApi + "Party";
  partyPricingApi: string = this.baseApi + "PartyPricing";

  

}
