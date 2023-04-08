import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { Contact } from '../Interface/CRM';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  ApiUrl: any="https://my-json-server.typicode.com/mabukoush1/contacts/db"
  constructor(private _http:HttpClient) { }
  getContact():Observable<Contact[]>{
    return this._http.get<Contact[]>(this.ApiUrl);
  }

}
