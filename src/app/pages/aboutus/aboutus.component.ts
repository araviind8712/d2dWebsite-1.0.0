import { AfterViewInit, Component } from '@angular/core';
import aboutdata  from "../../../assets/about.json";
import { CommonModule } from '@angular/common';
import { GetintouchComponent } from '../../../shared/getintouch/getintouch.component';
import { MatDialog } from '@angular/material/dialog';
import { ContactUsComponent } from '../contact-us/contact-us.component';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css',
  standalone: false,
})

export class AboutusComponent {
  aboutData:any[]=aboutdata;
    constructor(private dialog: MatDialog) { }
  
  openContactUs(){
    this.dialog.open(ContactUsComponent, {
            width: '100vw',
            maxWidth: '100vw',
            maxHeight: 'fit-content',
            position: { bottom: '0px' },
            panelClass: 'custom-dialog',
    });
  }
}