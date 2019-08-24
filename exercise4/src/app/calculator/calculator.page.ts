import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements OnInit {
  private resultado : string;

  constructor() {
    this.resultado = "";
  }

  calculate(item) : void {
    switch (item) {
      case "AC": 
        this.resultado = '';
        break;
      case "=": 
        try {
          this.resultado = eval(this.resultado);
        } catch(e) {
          this.resultado = "Nan";
        }
        
        break;
      default:
        this.resultado = this.resultado + item;
    }
  }

  ngOnInit() {
  }

}
