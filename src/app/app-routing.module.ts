import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { NewUserComponent } from './new-user/new-user.component';
import { Screen1Component } from './screen1/screen1.component';

const routes: Routes = [
  {path:"emplist",component:EmployeeListComponent},
  {path:"", redirectTo:"emplist",pathMatch:"full"},
  {path:"empdetails",component:EmployeeDetailsComponent},
  {path:"newUser",component:NewUserComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
