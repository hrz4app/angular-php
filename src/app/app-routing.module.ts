import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DetailComponent } from './employee/detail/detail.component';
import { InsertComponent } from './employee/insert/insert.component';
import { EditComponent } from './employee/edit/edit.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "detail/:id", component: DetailComponent },
  { path: "insert", component: InsertComponent },
  { path: "edit/:id", component: EditComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
