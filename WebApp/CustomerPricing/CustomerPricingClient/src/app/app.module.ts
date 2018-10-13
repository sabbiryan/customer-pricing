import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
//import { HttpHeaders } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotifierModule } from 'angular-notifier';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { DepartmentEmployeesComponent } from './department-employees/department-employees.component';
import { SigninComponent } from './signin/signin.component';

import { UrlService } from './services/url.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    DepartmentComponent,
    DepartmentEmployeesComponent,
    SigninComponent    
  ],
  imports: [
    BrowserModule, HttpModule, HttpClientModule, FormsModule, BrowserAnimationsModule, NotifierModule, AppRoutingModule
  ],
  providers: [UrlService],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
