import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { AddVendorComponent } from './vendor/add/add.component';
import { ViewVendorComponent } from './vendor/view/view.component';
import { AddItemComponent } from './item/add/add.component';
import { ViewItemComponent } from './item/view/view.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin.component';
import { GridModule } from "@syncfusion/ej2-ng-grids";
import { PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-ng-grids';
import { ReactiveFormsModule } from '@angular/forms';
import { FeedbackComponent } from './feedback/feedback.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    GridModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [

    PageService,
    SortService,
    FilterService,
    GroupService

  ],
  declarations: [LoginComponent, AddVendorComponent, ViewVendorComponent, AddItemComponent, ViewItemComponent, DashboardComponent, AdminComponent, FeedbackComponent]
})
export class AdminModule { }
