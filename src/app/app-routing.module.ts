import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './admin/login/login.component'
import { DashboardComponent } from 'src/app/admin/dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: "", component: LoginComponent, data: { title: "Login" } }
      
    ])
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
