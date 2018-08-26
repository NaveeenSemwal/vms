import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewItemComponent implements OnInit {
  AddItem = false;
  constructor() { }
  ngOnInit() {
  }

}
