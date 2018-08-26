import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  userName : string;

  constructor() { }

  ngOnInit() {

    var loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    this.userName = loggedInUser.First_Name;
  }

}
