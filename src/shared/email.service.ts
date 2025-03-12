import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { Observable, forkJoin, from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor() {}

  private userID = 'UHJnWEUpvTMZEmvsj';
  private serviceID = 'service_gcgkh4c';
  private templateID1 = 'template_h69oey8';
  private templateID2 = 'template_9hmn628';

  sendEmail(formData: any): Observable<{ res1: EmailJSResponseStatus; res2: EmailJSResponseStatus }> {
    const email1$ = from(emailjs.send(this.serviceID, this.templateID1, formData, this.userID));
    const email2$ = from(emailjs.send(this.serviceID, this.templateID2, formData, this.userID));

    return forkJoin({
      res1: email1$,
      res2: email2$,
    });
  }
}
