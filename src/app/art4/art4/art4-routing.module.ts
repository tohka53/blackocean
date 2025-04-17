import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Art4Component } from './art4.component';

const routes: Routes = [

  {
    path: '',
    component: Art4Component  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Art4RoutingModule { }
