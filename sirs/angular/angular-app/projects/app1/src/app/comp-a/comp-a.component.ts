import { Component, OnInit } from '@angular/core';
import { CommonService } from 'projects/app1/src/app/common.service';

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.css']
})
export class CompAComponent implements OnInit {
  message;
  user;
  userDetails;

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.message = this.commonService.getMessage();
    this.user = this.commonService.getPerson();
    this.userDetails = this.commonService.getUsers();
  }

}
