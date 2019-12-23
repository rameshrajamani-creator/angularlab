import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonService } from 'projects/app1/src/app/common.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  @Output() toSendMesg = new EventEmitter();
  @Output() toSendObj = new EventEmitter();
  @Output() toSendArray = new EventEmitter();


  message;
  user;
  userDetails;

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.message = this.commonService.getMessage();
    this.user = this.commonService.getPerson();
    this.userDetails = this.commonService.getUsers();
  }

  sendMessageToParent() {
    this.toSendMesg.next(this.message);

  }

  sendObjectToParent() {
    this.toSendObj.next(this.user);
  }

  sendArrayToParent() {
    this.toSendArray.next(this.userDetails);
  }

}
