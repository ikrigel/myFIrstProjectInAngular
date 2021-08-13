import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import EmployeeModel from 'src/app/models/employees.model';
import { EmployeesService } from 'src/app/services/employees.service';
import { NotifyService } from 'src/app/services/notify.service';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employees: EmployeeModel[];
  public image_api: string = "http://localhost:3030/api/employees/images/";
  
  
  constructor(private myEmployeesService: EmployeesService, private notify: NotifyService) { }

async  ngOnInit(){
    try {
      //const employees = await this.http.get<EmployeeModel[]>("http://localhost:3030/api/employees").toPromise();
      this.employees = (await this.myEmployeesService.getAllEmployees()).reverse();
     // this.employees = employees.reverse();
    } catch(err) {
      console.log(err);
    }
  }

}
