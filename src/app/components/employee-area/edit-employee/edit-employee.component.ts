import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import EmployeeModel from 'src/app/models/employee.model';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
 
  public employee: EmployeeModel = new EmployeeModel();
  private employee_api: string = "http://localhost:3030/api/employees/";
  public image_url: string;
  private employee_id: number;
  public imageVisited: boolean = false;

public formControl:FormGroup;
public firstNameControl:FormControl;
public lastNameControl:FormControl;
public titleControl:FormControl;
public countryControl:FormControl;
public cityControl:FormControl;
public birthDateControl:FormControl;
public imageControl:FormControl;


  constructor(private myActivatedRoute: ActivatedRoute ,private http: HttpClient, private router: Router) {
    this.firstNameControl = new FormControl(null, [Validators.required, Validators.pattern("^[A-Z].*$")]);
    this.lastNameControl = new FormControl(null, [Validators.required, Validators.pattern("^[A-Z].*$")]);
    this.titleControl = new FormControl(null, Validators.required);
    this.countryControl = new FormControl(null, Validators.required);
    this.cityControl = new FormControl(null, Validators.required);
    this.birthDateControl = new FormControl(null, [Validators.required, Validators.pattern("^[0-9]{2}[/][0-9]{2}[/][0-9]{4}$")]);
    this.imageControl = new FormControl();
    this.formControl = new FormGroup({
      firstNameControl: this.firstNameControl,
      lastNameControl: this.lastNameControl,
      titleControl: this.titleControl,
      countryControl: this.countryControl,
      cityControl: this.cityControl,
      birthDateControl: this.birthDateControl,
      imageControl: this.imageControl
    })
  }

   
 async ngOnInit(){

  this.employee_id = this.myActivatedRoute.snapshot.params.id;
    // from "product details", since it's the same
    try {

    // 1. Extract 'id' from URL
      // const product_id = this.myActivatedRoute.snapshot.params.id;

      // const on local scope - since this is an update
      const employee = await this.http.get<EmployeeModel>(this.employee_api + this.employee_id).toPromise();
      this.firstNameControl.setValue(employee.firstName);
      this.lastNameControl.setValue(employee.lastName);
      this.titleControl.setValue(employee.title);
      this.countryControl.setValue(employee.country);
      this.cityControl.setValue(employee.city);
      this.birthDateControl.setValue(employee.birthDate);
      this.image_url ="http://localhost:3030/api/employee/images/"+employee.imageName; 

    // 3. Assign retrieved employee to the 'employee' object in this class
    } catch(err) {
      console.log(err);
  }
  }

  saveImage(args: Event) {
    this.employee.images = (args.target as HTMLInputElement).files;

  }

  loseFocus() {
    this.imageVisited = true;
  }

  async update() {
    // transfer control object values into "employee" object values
    this.employee.firstName = this.firstNameControl.value;
    this.employee.lastName = this.lastNameControl.value;
    this.employee.title = this.titleControl.value;
    this.employee.country = this.countryControl.value;
    this.employee.city=this.cityControl.value;
    this.employee.birthDate=this.birthDateControl.value;

    try {
    const myFormData = new FormData();
    debugger;
    myFormData.append("firstName", this.employee.firstName);
    myFormData.append("lastName", this.employee.lastName);
    myFormData.append("title", this.employee.title);
    myFormData.append("country", this.employee.country);
    myFormData.append("city", this.employee.city);
    myFormData.append("birthDate", this.employee.birthDate);
    myFormData.append("image", this.employee.images.item(0));    // "image" - according to POST api; product.images[0]

    const updatedEmployee = await this.http.put<EmployeeModel>(this.employee_api + this.employee_id, myFormData).toPromise();

    // this.router.navigateByUrl("/products");
    this.router.navigateByUrl(`/employees/${updatedEmployee.id}`)
    } catch(err) {
      console.log(err)
    }
}

   
    }

  



