import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmailService } from '../../../shared/email.service';

@Component({
  selector: 'app-contact-us',
  standalone: false,
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  gmail='dna2discovery@outlook.com';
  errorMsg:boolean = false;
  successMsg:boolean = false;
  contactForm: FormGroup;
  snackbar:MatSnackBar;
  service: EmailService;
  constructor(public dialogRef: MatDialogRef<ContactUsComponent>,snackbar:MatSnackBar,service:EmailService) {
    this.snackbar=snackbar;
    this.service=service;
    this.contactForm=new FormGroup(
      {
        name : new FormControl('',[Validators.required,Validators.pattern('^[A-Za-z ]+$')]),
        email: new FormControl('',[Validators.required,Validators.email,Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$")]),
        comments: new FormControl('',[Validators.required])
      }
    )
  }

  async save(){
    if(this.contactForm.invalid){
      return;
    }
    else{
      var details=this.contactForm.value;
      var formData={
        user_name:details.name,
        user_email:details.email,
        message:details.comments
      };
      this.service.sendEmail(formData).subscribe({
        next: (response) => {
          console.log('Emails sent successfully:', response);
          this.successMsg = true;
          this.errorMsg = false;
        },
        error: (error) => {
          console.error('Error sending emails:', error);
          this.errorMsg = true;
          this.successMsg = false;
        },
      });
      
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

}
