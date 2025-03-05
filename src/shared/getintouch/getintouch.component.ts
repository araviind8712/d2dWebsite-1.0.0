import { Component, EventEmitter, Output } from '@angular/core';
import { ContactUsComponent } from '../../app/pages/contact-us/contact-us.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-getintouch',
  templateUrl: './getintouch.component.html',
  styleUrl: './getintouch.component.css',
  standalone: false,
})
export class GetintouchComponent {
  @Output() scrollToTopEvent = new EventEmitter<void>();
  
  constructor(private dialog: MatDialog) { }
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
