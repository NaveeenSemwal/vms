import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from 'src/app/admin/dashboard/dashboard.component';
import { AddVendorComponent } from 'src/app/admin/vendor/add/add.component';
import { ViewItemComponent } from 'src/app/admin/item/view/view.component';
import { AdminComponent } from 'src/app/admin/admin.component';
import { ViewVendorComponent } from 'src/app/admin/vendor/view/view.component';
import { FeedbackComponent } from 'src/app/admin/feedback/feedback.component';

const routes: Routes = [
  {
    path: "admin", component: AdminComponent,
    children: [

      { path: "dashboard", component: DashboardComponent },
      { path: "vendor/add", component: AddVendorComponent },
      { path: "vendor/view", component: ViewVendorComponent },
      { path: "item/view", component: ViewItemComponent },
      { path: "feedback", component: FeedbackComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
