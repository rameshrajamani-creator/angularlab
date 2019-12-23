import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  ram = "Angular welcomes you";

  person = {
       fname: "Ramesh",
       lname: "Rajamani"
  };

  users = ["Ramesh", "Ram", "Ravi"];

  getMessage() {
    return this.ram;
  }

  getPerson() {
    return this.person;
  }

  getUsers() {
    return this.users;
  }


}
