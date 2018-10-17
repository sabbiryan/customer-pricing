import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { PartyListPage } from '../pages/party-list/party-list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PartyDetailPage } from '../pages/party-detail/party-detail';
import { PartyCreatePage } from '../pages/party-create/party-create';
import { DataServiceProvider } from '../providers/data-service/data-service';
import { ProductListPage } from '../pages/product-list/product-list';
import { ProductCreatePage } from '../pages/product-create/product-create';
import { AuthenticationService } from '../providers/authentication.service';
import { LocalStorageService } from '../providers/localstorage.service';
import { UrlService } from '../providers/url.service';
import { LoginPageModule } from '../pages/login/login.module';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    PartyListPage,
    PartyDetailPage,
    PartyCreatePage,ProductListPage,ProductCreatePage,
  ],
  imports: [
    BrowserModule, LoginPageModule, HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    PartyListPage,
    PartyDetailPage,
    PartyCreatePage,ProductListPage,ProductCreatePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataServiceProvider, AuthenticationService, LocalStorageService, UrlService
  ]
})
export class AppModule {}
