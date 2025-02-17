import { Component } from '@angular/core';
import aboutdata  from "../../../assets/about.json";
import { CommonModule } from '@angular/common';
import { GetintouchComponent } from '../../../shared/getintouch/getintouch.component';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css',
  standalone: false,
})

export class AboutusComponent {
  aboutData:any[]=aboutdata;
}