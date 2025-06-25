import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-convertor',
  imports: [CommonModule, FormsModule],
  templateUrl: './convertor.html',
  styleUrl: './convertor.css'
})
export class Convertor {
  celcius: any = '';
  fahrenheit: any = '';
  resC: any = '';
  resF: any = '';

  celciusToFahrenheit(){
    this.resF = (this.celcius * 9/5) + 32; 
  }

  fahrenheitToCelcius(){
    this.resC = (this.fahrenheit - 32) * 5/9;
  }

}
