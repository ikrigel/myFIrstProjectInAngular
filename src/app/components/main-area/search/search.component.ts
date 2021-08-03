import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  textToSearch:string="First Search";
  public spanStyle={};
  public test: number;
  public _george: number;
  
  constructor() { }

  ngOnInit(): void {
    this.george=23;
  }
  set george(jj:number){
    this._george=jj;
    this.test=this._george /2;
  }

  handleClick(args:MouseEvent){
    this.textToSearch;
    this.spanStyle={"background-color":"blue"};
  }


}
