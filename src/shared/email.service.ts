import { Injectable } from '@angular/core';
import emailjs from 'emailjs-com';
import { ContactUsComponent } from '../app/pages/contact-us/contact-us.component';
import { MatDialogRef } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }

  private userID = 'UHJnWEUpvTMZEmvsj';
  private serviceID = 'service_gcgkh4c';
  private templateID = 'template_h69oey8'; 

  sendEmail(formData: any):string {
    var res='none';
    emailjs
      .send(this.serviceID, this.templateID, formData, this.userID)
      .then(
        (response) => {
          console.log('Email sent successfully:', response);
          alert('Querry Raised Successfully');

        },
        (error) => {
          console.error('Error sending email:', error);
          alert('Unable to raise the querry!!! Please Try again');
        }
      );
      return res;
  }
}
