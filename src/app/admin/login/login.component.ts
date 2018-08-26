import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _adminService: AdminServiceService, private router: Router) { }



  ngOnInit() {
  }

  SubmitLogin(form: NgForm) {

    //console.log(form.value.UserName + form.value.Password);

    this._adminService.ValidateLogin(form.value.UserName, form.value.Password)
      .subscribe((response: any) => {

       // console.log(response.data[0]);


        if (response.type === "success") {

          localStorage.setItem('loggedInUser', JSON.stringify(response.data[0]));
         this.router.navigate(['/admin']);
        }

      })
      , err => {
        alert("Error Occured " + err);
      }
  }
}
