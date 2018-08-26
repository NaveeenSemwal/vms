import { Component, OnInit } from '@angular/core';
import { VendorService } from 'src/app/services/vendor.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  public data: Object[];
  constructor(private vendorService: VendorService) { }

  ngOnInit() {
    this.getAllItems();
  }

  getAllItems() {
    this.vendorService.getAllItem().subscribe(res => {
      this.data = res["data"];

    })
      , err => {
        console.log("Error Occured " + err);
      }
  }

}
