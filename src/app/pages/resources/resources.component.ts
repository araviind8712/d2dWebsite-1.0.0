import { Component, OnInit } from '@angular/core';
import resourceData from '../../../assets/resources.json';
import { CommonModule } from '@angular/common';
import { GetintouchComponent } from '../../../shared/getintouch/getintouch.component';
import { ResourceCardComponent } from '../../../shared/resource-card/resource-card.component';
import { trigger,state,style,transition,animate } from '@angular/animations';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrl: './resources.component.css',
  standalone: false,
  animations:[
    trigger('slideUp',[
      state('hidden',style({transform:'translateY(100px)',opacity:0})),
      state('visible', style({ transform: 'translateY(0)', opacity: 1 })),
      // transition('hidden => visible', animate('5000ms ease-in-out')),
      // transition('hidden => visible', animate('5.5s cubic-bezier(0.25, 1.25, 0.3, 1)'))
    ])
  ]
})
export class ResourcesComponent{
  resources:any[]=resourceData;
  // isVisible=false;
  // ngOnInit() {
  //   const card = document.getElementById('card');
  //   if (card) {
  //     const rect = card.getBoundingClientRect();
  //     this.isVisible = rect.top < window.innerHeight - 100;
  //   }
  // }
}
