import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { NotifierService } from 'angular-notifier';

import { DepartmentService } from "../services/department.service";
import { Department } from "../models/department";

import { EmployeeService } from "../services/employee.service";
import { Employee } from "../models/employee";



@Component({
  selector: 'app-department-employees',
  templateUrl: './department-employees.component.html',
  styleUrls: ['./department-employees.component.css'],
  providers: [DepartmentService, NotifierService, EmployeeService]
})
export class DepartmentEmployeesComponent implements OnInit {


  department: Department;
  model: Employee;
  isCreateMode: boolean;
  isUpdateMode: boolean;
  genders: string[];

  constructor(private employeeService: EmployeeService,
    private departmentService: DepartmentService,
    private notifierService: NotifierService,
    private route: ActivatedRoute) {

    this.department = new Department();
    this.model = new Employee();    
    this.isCreateMode = false;
    this.isUpdateMode = false;

    this.genders = [
      "Male",
      "Female",
      "PreferNotToSay"
    ];
  }

  ngOnInit() {
    this.getDepartment(this.route.snapshot.params["id"]);
  }

  addEmployee() {
    this.cancel();
    this.model.DepartmentId = this.department.Id;
    this.isCreateMode = true;
  }


  getDepartment(id) {

    this.departmentService.getDepartment(id).subscribe(data => {
        console.log(data);
        this.department = data;        
        this.notifierService.notify("info", "Data Loaded");
        this.isUpdateMode = false;
        this.isCreateMode = false;
      },
      error => {
        this.notifierService.notify("error", "Failed To Load Data!");
      });
  }


  getEmployee(id) {
    this.employeeService.getEmployee(id).subscribe(data => {
        this.model = data;
        this.model.Gender = this.model.GenderName;
        this.notifierService.notify("info", "Data Loaded");
        this.isUpdateMode = true;
        this.isCreateMode = false;
      },
      error => {
        this.notifierService.notify("error", "Failed To Load Data!");
      });
  }


  updateEmployee(isValid: boolean) {

    if (!isValid) {
      this.notifierService.notify("error", "Form validation failed!");
      return;
    }

    this.employeeService.updateEmployee(this.model)
      .subscribe(
        data => {
          console.log(data);
          this.model = new Employee();
          this.notifierService.notify("success", "Update Success");
          this.getDepartment(this.route.snapshot.params["id"]);
          this.isUpdateMode = false;
        },
        error => {
          console.log(error);
          this.notifierService.notify("error", "Update Failed!");
        }
      );
  };

  createEmployee(isValid: boolean) {

    if (!isValid) {
      this.notifierService.notify("error", "Form validation failed!");
      return;
    }

    if (this.isUpdateMode) {
      this.updateEmployee(isValid);
      return;
    }

    this.employeeService.createEmployee(this.model)
      .subscribe(
        data => {
          console.log(data);
          this.model = new Employee();
          this.notifierService.notify("success", "Create Success");
          this.getDepartment(this.route.snapshot.params["id"]);
          this.isUpdateMode = false;
        },
        error => {
          console.log(error);
          this.notifierService.notify("error", "Create Failed!");
        }
      );
  };



  deleteEmployee(id) {
    this.employeeService.deleteEmployee(id).subscribe(data => {
      this.getDepartment(this.route.snapshot.params["id"]);
      this.notifierService.notify("info", "Delete Success");
    },
      error => {
        this.notifierService.notify("error", "Delete Failed!");
      });
  }

  cancel() {
    this.model = new Employee();
    this.isUpdateMode = false;
    this.isCreateMode = false;
    this.notifierService.notify("default", "Calceled");
  }
}
