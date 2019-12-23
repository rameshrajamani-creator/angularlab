import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  receiveMsg(message) {
   console.log(message);
  }

  receiveObj(Object) {
    console.log(Object);
   }

   receiveArray(Array) {
    console.log(Array);
   }

}
