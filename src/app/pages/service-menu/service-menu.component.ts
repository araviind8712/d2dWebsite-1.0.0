import { Component, Input, OnInit } from '@angular/core';
import serviceMenu from '../../../assets/serviceMenu.json'
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-service-menu',
  standalone: false,
  templateUrl: './service-menu.component.html',
  styleUrl: './service-menu.component.css'
})
export class ServiceMenuComponent implements OnInit{

  serviceMenu : any[]=[];
  currentServiceMenu : any[]=[];
  @Input() currentService:any;
  @Input() bgColor:any;

  constructor(){
  }

  ngOnInit(): void {
    this.serviceMenu=serviceMenu;
    if(this.currentService=='bioInfo'){
      this.currentServiceMenu=this.getSlicedArray(1);
    } else if (this.currentService=='bioEng'){
      this.currentServiceMenu=this.getSlicedArray(2);
    } else if (this.currentService=='bioInfoTraining'){
      this.currentServiceMenu=this.getSlicedArray(3);
    } else if (this.currentService=='statisticalTesting'){
      this.currentServiceMenu=this.getSlicedArray(4);
    } else if (this.currentService=='seqTech'){
      this.currentServiceMenu=this.getSlicedArray(5);
    } else {
      this.currentServiceMenu=this.serviceMenu;
    }
  }

  getSlicedArray(index: number): number[] {
    return [...this.serviceMenu.slice(index, index + 3), ...this.serviceMenu.slice(0, Math.max(0, index + 3 - this.serviceMenu.length))];
  }

  redirect(image:string){
    var page=image.split('/')[2].split('.')[0];
    window.location.href='/d2dWebsite-1.0.0/services?service='+page+'&page=service';
  }
}
