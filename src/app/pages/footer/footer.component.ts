import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ContactUsComponent } from '../contact-us/contact-us.component';

@Component({
  selector: 'app-footer',
  standalone: false,
  
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  constructor(public route:ActivatedRoute, public dialog:MatDialog){
     
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
