import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotifierModule } from 'angular-notifier';
import { NgBusyModule } from 'ng-busy';


import { JwtInterceptor, ErrorInterceptor } from './signin/_helpers';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { PartyComponent } from './party/party.component';
import { PartyPricingComponent } from './party-pricing/party-pricing.component';
import { SigninComponent } from './signin/signin.component';

import { UrlService } from './services/url.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    PartyComponent,
    PartyPricingComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, BrowserAnimationsModule, NotifierModule, AppRoutingModule, NgBusyModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    UrlService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
