import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { EmailBody } from './email-body';
import { EmailService } from './email.service';

@Component({
  selector: 'app-email-notification',
  templateUrl: './email-notification.component.html',
  styleUrls: ['./email-notification.component.css'],
})
export class EmailNotificationComponent implements OnInit {
  list:any[]=[]

  email = new EmailBody();

  constructor(private service: EmailService) {}

  ngOnInit(): void {
    this.service.getVolunteerEmails().subscribe((data) => {
      this.list.push()
     console.log(data);
    });

    // this.service.sendEmailList(this.list).subscribe(data=>{
    // //  console.log(this.list);
    // });
  }

  sendEmail() {
    console.log(this.email);

    this.service.sendMail(this.email).subscribe(data=>{
      console.log("Email Sent to Backend");
    })
    this.email=new EmailBody();
  }
}
