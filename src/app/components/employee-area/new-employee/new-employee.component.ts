import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import EmployeeModel from 'src/app/models/employee.model';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {

  public employee: EmployeeModel = new EmployeeModel();
  private employee_api: string = "http://localhost:3030/api/employees";
  public imageVisited: boolean = false;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }
  saveImage(args: Event) {
    this.employee.images = (args.target as HTMLInputElement).files;
  }

  loseFocus() {
    this.imageVisited = true;
  }
  async submit() {
    try {
      //1. Conver 'employee' object to FormData object (to be able to make a POST call)
      const myFormData = new FormData();
      debugger;
      myFormData.append("firstName", this.employee.firstName);
      myFormData.append("lastName", this.employee.lastName);
      myFormData.append("title", this.employee.title);
      myFormData.append("country", this.employee.country);
      myFormData.append("city", this.employee.city);
      myFormData.append("birthDate", this.employee.birthDate);
      myFormData.append("image", this.employee.images.item(0));//product.images[0]
      //2. Make POST with FormDat and check new product was created in the API
      const addedEmployee = await this.http.post<EmployeeModel>(this.employee_api, myFormData).toPromise();

      console.log('x');
      //3. Redirect to '/employee' page or the product details of the new product (products/:id)
      //this.router.navigateByUrl("/employees");
      this.router.navigateByUrl(`/employees/${addedEmployee.id}`);
    } catch (err) {
      console.log(err);
    }
  }
}