import { Component, OnInit } from '@angular/core';


import { NotifierService } from 'angular-notifier';

import { DepartmentService } from "../services/department.service";
import { Department } from "../models/department";

import { EmployeeService } from "../services/employee.service";
import { Employee } from "../models/employee";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [DepartmentService, NotifierService, EmployeeService]
})
export class EmployeeComponent implements OnInit {

  list: Employee[];
  model: Employee;
  departments : Department[];
  isUpdateMode: boolean;
  genders: string[];

  constructor(private employeeService: EmployeeService, private departmentService: DepartmentService, private notifierService: NotifierService) {

    this.model = new Employee();
    this.isUpdateMode = false;

    this.genders = [
      "Male",
      "Female",
      "PreferNotToSay"
    ];
  }

  ngOnInit() {
    this.getAllDepartments();
    this.getAllEmployees();

    
  }



  getAllDepartments() {

    this.departmentService.getAllDepartments()
      .subscribe(
        data => {

          this.departments = data;
          console.log(data);
        },
        error => console.log(error)
      );
  }



  getAllEmployees() {

    this.employeeService.getAllEmployees()
      .subscribe(
        data => {

          this.list = data;
          console.log(data);
        },
        error => console.log(error)
      );
  }


  getEmployee(id) {
    this.employeeService.getEmployee(id).subscribe(data => {
      this.model = data;
        this.model.Gender = this.model.GenderName;
      this.notifierService.notify("info", "Data Loaded");
      this.isUpdateMode = true;
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
          this.getAllEmployees();
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
          this.getAllEmployees();
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
      this.getAllEmployees();
      this.notifierService.notify("info", "Delete Success");
    },
      error => {
        this.notifierService.notify("error", "Delete Failed!");
      });
  }

  cancel() {
    this.model = new Employee();
    this.isUpdateMode = false;
    this.notifierService.notify("default", "Calceled");
  }
}
