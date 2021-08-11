import { Component, OnInit } from '@angular/core';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit {
public randomColor:string;
  constructor(public colorService:ColorService) { }

  ngOnInit(): void {
    this.randomColor=this.colorService.getRandomColor();
  }

}
