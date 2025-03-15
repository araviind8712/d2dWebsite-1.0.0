import { Component, EventEmitter, Output } from '@angular/core';
import { ContactUsComponent } from '../../app/pages/contact-us/contact-us.component';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-getintouch',
  templateUrl: './getintouch.component.html',
  styleUrl: './getintouch.component.css',
  standalone: false,
})
export class GetintouchComponent {
  @Output() scrollToTopEvent = new EventEmitter<void>();
  isAboutUs: boolean = false;
  isServices : boolean = false;
  isResources: boolean = false;
  
  constructor(private dialog: MatDialog,private route: ActivatedRoute) {
    this.route.queryParamMap.subscribe((data)=>{
      this.isAboutUs = data.get('page')=='aboutus';
      this.isServices = data.get('page')=='services';
      this.isResources = data.get('page')=='resources';
    })
   }
  openDialog(): void {
    this.dialog.open(ContactUsComponent, {
      width: '100vw',
      maxWidth: '100vw',
      maxHeight: 'fit-content',
      position: { bottom: '0px' },
      panelClass: 'custom-dialog',
    });
  }
}
