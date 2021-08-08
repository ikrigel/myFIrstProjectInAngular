import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public textToSearch: string = "First Search";

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(args: MouseEvent) {
    this.textToSearch;
  }

}
