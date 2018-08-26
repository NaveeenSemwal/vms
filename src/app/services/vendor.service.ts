import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Vendor } from "../model/vendor";
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class VendorService {

  private _baseUrl = "http://mazalatur.com/DailyDiary/Apis/Vendor.php";

  constructor(private http: HttpClient) { }

  saveVendor(vendor: Vendor) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this
      .http
      .post(this._baseUrl, JSON.stringify(vendor), { headers });


  }



  getAllItem() {
    let body = JSON.stringify({ "type": "GetAllItems" });

    return this
      .http
      .post("http://mazalatur.com/DailyDiary/Apis/getItem.php", body);
  }



  getPostalDetail(pincode: string) {

    const url = "http://postalpincode.in/api/pincode/" + pincode;

    return this.http.get(url);
  }





  private handleError(error: Response) {

    console.log(error);


    return Observable.throw(error.json() || 'Opps!! Server error');
  }

}
