import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import EmployeeModel from 'src/app/models/employees.model';
import { Router } from '@angular/router';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})

export class EmployeeDetailsComponent implements OnInit {




  public employee: EmployeeModel;
  public image_api: string = "http://localhost:3030/api/employees/images/";
  private employee_api: string = "http://localhost:3030/api/employees/";

  public employee_id = +this.myActivatedRouter.snapshot.params.id;
 


  constructor(private myEmployeesService: EmployeesService, private myActivatedRouter: ActivatedRoute, private http: HttpClient, private router: Router) { }

  async ngOnInit() {

    try {
      //1.Extract 'id' from URL
      //2. Make REST API
      this.employee = await this.myEmployeesService.getOneEmployee(this.employee_id);
      //3. Asssign retrieved product to the 'product' object i this class
    } catch (err) {
      console.log(err);
    }
  }
  async delete() {
    if (window.confirm('Are sure you want to delete this employee ?')) {
      try {
        // 1. Extract 'id' from URL
        
        //delete request
        await this.myEmployeesService.deleteEmployee(this.employee_id);
        //redirect to productlist
        this.router.navigateByUrl(`/employees`);

      } catch (err) {
        console.log(err);
      }
    }
  }



}
