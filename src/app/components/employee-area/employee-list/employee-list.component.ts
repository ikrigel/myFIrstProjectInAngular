import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import EmployeeModel from 'src/app/models/employee.model';
import ProductModel from 'src/app/models/product.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employees: EmployeeModel[];
  public image_api: string = "http://localhost:3030/api/employees/images/";
  
  
  constructor(private http: HttpClient) { }

async  ngOnInit(){
    try {
      const employees = await this.http.get<EmployeeModel[]>("http://localhost:3030/api/employees").toPromise();
      this.employees = employees.reverse();
    } catch(err) {
      console.log(err);
    }
  }

}
