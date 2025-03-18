import { Component } from '@angular/core';
import {CONFIG} from '../../../urlConfig';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  standalone: false,
})
export class FooterComponent {
  config: any;
  constructor(){
    this.config=CONFIG;
  }
}
