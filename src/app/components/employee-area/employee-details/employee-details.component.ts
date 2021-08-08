import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import EmployeeModel from 'src/app/models/employee.model';
import ProductModel from 'src/app/models/product.model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})

export class EmployeeDetailsComponent implements OnInit {




  public employee: EmployeeModel;
  public image_api: string = "http://localhost:3030/api/employees/images/";
  private employee_api: string = "http://localhost:3030/api/employees/";

  constructor(private myActivatedRouter: ActivatedRoute, private http: HttpClient) { }

  async ngOnInit() {

    try {
      //1.Extract 'id' from URL
      const employee_id = this.myActivatedRouter.snapshot.params.id;
      //2. Make REST PIA
      this.employee = await this.http.get<EmployeeModel>(this.employee_api + employee_id).toPromise();
      //3. Asssign retrieved product to the 'product' object i this class
    } catch (err) {
      console.log(err);
    }
  }




}
