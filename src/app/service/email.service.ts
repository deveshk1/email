import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  // use springboot server url here
  private baseUBackEndUrl:string ="http://localhost:7777"

  constructor(private http:HttpClient) { }

 
  sendEmail(data:any)
{
return this.http.post(`${this.baseUBackEndUrl}/sendemail`,data)
}
}

