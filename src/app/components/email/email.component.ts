import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmailService } from 'src/app/service/email.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  data= {
  
    to:"",
    subject:"",
    message:""
  
  }

  flag:boolean=false;

  constructor(private email:EmailService,private snack:MatSnackBar) { }

  ngOnInit(): void {
  }

  doSubmitForm(){
    console.log("submit fom");
    console.log("data",this.data);

    if(this.data.to==''|| this.data.subject==''||this.data.message=='')
    {
        this.snack.open("fields cannot be empty","OK");
        return;
    }
    this.flag=true;
    this.email.sendEmail(this.data).subscribe((response)=>{
        console.log("Response");
        this.flag=false;
        this.snack.open("Mail Sent","ok");
    },(error)=>{
      console.log("Error");
      this.flag=false;
      this.snack.open("Error Occured","ok");
    })
  }

}
