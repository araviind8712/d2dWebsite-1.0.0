import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact-us',
  standalone: false,
  
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  gmail='dnatodiscovery@gmail.com';
  contactForm: FormGroup;
  snackbar:MatSnackBar;
  constructor(public dialogRef: MatDialogRef<ContactUsComponent>,snackbar:MatSnackBar) {
    this.snackbar=snackbar;
    this.contactForm=new FormGroup(
      {
        name : new FormControl('',[Validators.required,Validators.pattern('^[A-Za-z ]+$')]),
        email: new FormControl('',[Validators.required,Validators.email]),
        comments: new FormControl('',[Validators.required])
      }
    )
  }

  save(){
    if(this.contactForm.invalid){
      return;
    }
    else{
      console.log(this.contactForm.value);
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
