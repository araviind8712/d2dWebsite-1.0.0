import { Component,Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-resource-card',
  templateUrl: './resource-card.component.html',
  styleUrl: './resource-card.component.css',
  encapsulation:ViewEncapsulation.None,
  standalone: false,
})
export class ResourceCardComponent {
  @Input() title!: string;
  @Input() description!:string;
  @Input() image!:string;
  @Input() type!:string;
  @Input() postedOn!:string;  
}
