import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import resourceData from '../../../assets/resources.json';
import { GetintouchComponent } from '../../../shared/getintouch/getintouch.component';
import { ResourceCardComponent } from '../../../shared/resource-card/resource-card.component';

@Component({
  selector: 'app-resource-detail',
  templateUrl: './resource-detail.component.html',
  styleUrl: './resource-detail.component.css',
  standalone: false,
})
export class ResourceDetailComponent {
  resources:any[]=resourceData;
}
