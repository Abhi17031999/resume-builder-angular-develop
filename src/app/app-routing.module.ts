import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridtableComponent } from  './gridtable/gridtable.component'

const routes: Routes = [
  // {path:'',component:GridtableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
