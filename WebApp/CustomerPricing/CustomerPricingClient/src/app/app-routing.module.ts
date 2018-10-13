import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from "./app.component";
import { SigninComponent } from "./signin/signin.component";
import { EmployeeComponent } from "./employee/employee.component";
import { DepartmentComponent } from "./department/department.component";
import { DepartmentEmployeesComponent } from "./department-employees/department-employees.component";


const routes: Routes = [
  //{ path: "", component: AppComponent },
  { path: "signin", component: SigninComponent },

  { path: "party", component: DepartmentComponent },
  { path: "party/:id", component: DepartmentEmployeesComponent },

  { path: 'product', component: EmployeeComponent },  

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
