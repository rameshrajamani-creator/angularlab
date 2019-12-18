import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xyz',
  templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.css']
})
export class XyzComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ram = "Angular welcomes you";

  person = {
       fname: "Ramesh",
       lname: "Rajamani"
  };

  users = ["Ramesh", "Ram", "Ravi"];

  sayHello() {
    alert("Hello")
  }

}
