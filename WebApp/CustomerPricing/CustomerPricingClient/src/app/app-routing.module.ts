import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from "./app.component";
import { SigninComponent } from "./signin/signin.component";
import { ProductComponent } from "./product/product.component";
import { PartyComponent } from "./party/party.component";
import { PartyPricingComponent } from "./party-pricing/party-pricing.component";


const routes: Routes = ([
  { path: "", component: PartyPricingComponent },
  { path: "signin", component: SigninComponent },
  { path: "party", component: PartyComponent },  
  { path: 'product', component: ProductComponent },  

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
]) as any;

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
