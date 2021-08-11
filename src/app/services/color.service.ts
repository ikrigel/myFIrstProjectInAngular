import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor() { }

  getColor(): string {
    return "black";
  }

  public getRandomColor(): string{
       
    return 'rgb(' + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255)+ ')';
  }
  
}
