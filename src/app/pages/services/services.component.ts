import { Component, OnInit } from '@angular/core';
import serviceData from '../../../assets/serviceDetails.json';
import { ActivatedRoute } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { ContactUsComponent } from '../contact-us/contact-us.component';



@Component({
  selector: 'app-services',
  standalone: false,
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements OnInit{
  serviceName: "bioInfo" | "bioEng" | "bioInfoTraining" | "statisticalTesting" | "seqTech" ="bioInfo";
  defaultServiceName: "bioInfo" | "bioEng" | "bioInfoTraining" | "statisticalTesting" | "seqTech" ="bioInfo";
  serviceData:any;
  constructor(public route:ActivatedRoute, public dialog:MatDialog){
   
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe((data)=>{
      this.serviceName = data['service'];
    })
    this.serviceData=serviceData[0][this.serviceName];
  }

  openDialog(): void {
      this.dialog.open(ContactUsComponent, {
        width: '100vw',
        maxWidth: '100vw',
        height: 'auto',
        position: { bottom: '0px' }, 
        panelClass: 'custom-dialog'
      });
    }

}
