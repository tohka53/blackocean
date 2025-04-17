import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Art5Component } from './art5.component';

const routes: Routes = [


  {
    path: '',
    component: Art5Component  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Art5RoutingModule { }
