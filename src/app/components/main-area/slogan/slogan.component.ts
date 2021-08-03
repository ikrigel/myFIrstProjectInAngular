import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slogan',
  templateUrl: './slogan.component.html',
  styleUrls: ['./slogan.component.css']
})
export class SloganComponent implements OnInit {
  slogan:string="My slogan";
  constructor() { }

  ngOnInit(): void {
  }

}
