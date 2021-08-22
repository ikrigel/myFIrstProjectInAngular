import { Component, OnInit } from '@angular/core';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit {
public randomColor:string='';
  colht: any;
  colo: any;
  colht2: string;
  constructor(public colorService:ColorService) { }
  year: number = new Date().getFullYear();
  month: any = new Date().getMonth();
  

  ngOnInit(): void {
    this.randomColor=this.colorService.getRandomColor();

 
    switch (this.month) {
      case 0:
        this.month = "ינואר";
        break;
      case 1:
        this.month = "פברואר";
        break;
      case 2:
        this.month = "מרץ";
        break;
      case 3:
        this.month = "אפריל";
        break;
      case 4:
        this.month = "מאי";
        break;
      case 5:
        this.month = "יוני";
        break;
      case  6:
        this.month = "יולי";
        break;
      case 7:
        this.month = "אוגוסט";
        break;
      case 8:
        this.month = "ספטמבר";
        break;
      case 9:
        this.month = "אוקטובר";
        break;
      case 10:
        this.month = "נובמבר";
        break;
      case 11:
        this.month = "דצמבר";
        break;
    }
  }
  
      public date=new Date();
  
      public curyear = new Date().getFullYear().toString();
      public curmonth = (new Date().getMonth() + 1).toString().slice(-2)
      public function():string{
        let m = new Date().getMonth().toString() + 1;
        let y = new Date().getFullYear().toString();
       return m + '-' + y;
    }
    
    colorito(args: MouseEvent){
      this.colht = this.colorService.getRandomColor();
  
}

colorito2(args: MouseEvent){
  this.colht2 = this.colorService.getRandomColor();

}

  }


