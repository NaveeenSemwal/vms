import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { addItem } from "../model/add.item";
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private _baseUrl = "http://mazalatur.com/DailyDiary/Apis/item.php";

  constructor(private http: HttpClient) { }

  saveItem(item: addItem) {
    let body = JSON.stringify(item);
  
    return this
      .http
      .post(this._baseUrl, body);
  }

  uploadImage(model: any) {
    return this
      .http
      .post("http://mazalatur.com/DailyDiary/Apis/upload.php", model);
  }


  private handleError(error: Response) {
    console.log(error);
    return Observable.throw(error.json() || 'Opps!! Server error');
  }

}
