import { Component, OnInit, ViewChild } from '@angular/core';
import { VendorService } from 'src/app/services/vendor.service';
import { Vendor } from 'src/app/model/vendor';
import { NgForm } from '@angular/forms';

import { data } from './datasource';
import { PageSettingsModel } from '@syncfusion/ej2-grids';
import { GridComponent, RowSelectEventArgs } from '@syncfusion/ej2-ng-grids';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddVendorComponent implements OnInit {


  newVendor: Vendor = new Vendor();

  formSubmitted: boolean = false;

  public data: Object[];
  public initialPage: Object;
  public scrollSettings;

  selectedrecords: Object[];

  @ViewChild('grid')
  public grid: GridComponent;

  constructor(private vendorService: VendorService) { }




  ngOnInit(): void {
    this.scrollSettings = { width: 400, height: 300 };

    this.getAllItems();

    this.initialPage = { pageSizes: true, pageCount: 4 };
  }




  rowSelected(args: RowSelectEventArgs) {
    this.selectedrecords = this.grid.getSelectedRecords();


  }

  getAllItems() {
    this.vendorService.getAllItem().subscribe(res => {
      this.data = res["data"];

    })
      , err => {
        console.log("Error Occured " + err);
      }
  }


  getStateCityByPincode(pincode: string) {

    console.log("Pincode is : " + pincode);

    this.vendorService.getPostalDetail(pincode).subscribe(res => {

      var postalData = res["PostOffice"][0];

      this.newVendor.state_name = postalData.State;
      this.newVendor.city_name = postalData.District;

      console.log("Success in postal api.");
    })
      , err => {
        console.log("Error Occured " + err);
      }


  }

  addVendor(form: NgForm) {

    this.formSubmitted = true;
    this.newVendor.type = "AddVender";
    this.newVendor.country_name="India";
  
    let selectedItem = [];

    for (let item in this.selectedrecords) {
      selectedItem.push(this.selectedrecords[item]["ItemID"])

    }

    if (form.valid) {

      console.log("form valid");

      this.newVendor.item_id = selectedItem.toString();

      console.log(JSON.stringify(this.newVendor));

      this.vendorService.saveVendor(this.newVendor).subscribe(res => {
        alert("Data added successfully !! ")
        console.log(res);
      })
        , err => {
          console.log("Error Occured " + err);
        }
    }

    this.newVendor = new Vendor();
    form.reset();

    this.formSubmitted = false;
  }
}
