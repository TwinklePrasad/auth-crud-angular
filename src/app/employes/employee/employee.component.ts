import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: Employee[];

  constructor(private _router: Router, private route: ActivatedRoute, private ts: EmployeeService) { }

  employee = new Employee("", "", "", "", "");

 resetForm(){
    this.employee = new Employee("", "", "", "", "");
  }
  ngOnInit() {
    this.getts();
    this.resetForm();
  }

  getts() {
    this.ts.getEmployees().subscribe(data => this.employees = data);
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    if (form.value._id == 0) {
      this.ts.addEmployee(this.employee).subscribe();
      this.getts();
    }
    else {
      this.ts.updateEmployee(this.employee).subscribe();
      this.getts(); 
    }
    this.resetForm();
  }

  onEdit(u: Employee) {

    this.employee = u;
  }

  deleteEmployee(id: String) {
    if (confirm("Are you sure to delete " + id)) {
      this.ts.delete(id).subscribe();
       this.getts();
    }
  }
}


