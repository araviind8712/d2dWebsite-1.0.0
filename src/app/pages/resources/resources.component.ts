import { Component } from '@angular/core';
import resourceData from '../../../assets/resources.json';
import { CommonModule } from '@angular/common';
import { GetintouchComponent } from '../../../shared/getintouch/getintouch.component';
import { ResourceCardComponent } from '../../../shared/resource-card/resource-card.component';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrl: './resources.component.css',
  standalone: false,
})
export class ResourcesComponent{
  resources:any[]=resourceData;
}
