import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from "@angular/http";
import { Headers } from '@angular/http'
import { HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';

import { map, take, catchError } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {



  constructor(private http: HttpClient) { }

  ValidateLogin(userName, Password) {

    var model = {
      'type': 'doLogin',
      'mobile_number': userName,
      'password': Password
    };

    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this
      .http
      .post("http://mazalatur.com/DailyDiary/Apis/ConsumerData.php", JSON.stringify(model), { headers });
  }
}
