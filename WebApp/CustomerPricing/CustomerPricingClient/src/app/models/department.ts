import {Employee} from "./employee";

export class Department {
  Id: string;
  DepartmentName: string;
  Location: string;
  DepartmentHead: string;
  EmployeeCount: number;
  Employees : Employee[];
}
