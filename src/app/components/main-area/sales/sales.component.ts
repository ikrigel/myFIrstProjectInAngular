import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  @Input()
  percent: number=4;
  @Input()
  category: string="Cakes";

  constructor() { }

  ngOnInit(): void {
  }

}
