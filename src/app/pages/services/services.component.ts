import { Component, OnInit } from '@angular/core';
import serviceData from '../../../assets/serviceDetails.json';
import { ActivatedRoute } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { StorageService } from '../../shared/services/storage.service';



@Component({
  selector: 'app-services',
  standalone: false,
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements OnInit{
  serviceName: "bioInfo" | "bioEng" | "bioInfoTraining" | "statisticalTesting" | "seqTech" ="bioInfo";
  serviceData:any;
  constructor(public route:ActivatedRoute, public dialog:MatDialog, public storageService:StorageService){
   
  }
  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      this.serviceName=params['service'];
    })
    this.serviceData=serviceData[0][this.serviceName];
    this.storageService.setLocalStorage('page',JSON.stringify('service'))
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
