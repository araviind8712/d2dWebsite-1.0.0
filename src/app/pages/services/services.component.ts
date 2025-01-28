import { Component } from '@angular/core';
import serviceData from '../../../assets/serviceDetails.json';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: false,
  
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  serviceName: "bioinformaticsAnalytics" | "bioinformaticsEngineering"="bioinformaticsEngineering";
  serviceData:any;
  constructor(route:ActivatedRoute){
    route.params.subscribe((params)=>{
      this.serviceName=params['service'];
    })
    this.serviceData=serviceData[0][this.serviceName];
    console.log(this.serviceData)
  }
}
