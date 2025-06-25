import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Convertor } from './convertor/convertor';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Convertor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'temp-convertor';
}
