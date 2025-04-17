import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Art1Component } from './art1.component';

const routes: Routes = [


  {
    path: '',
    component: Art1Component  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Art1RoutingModule { }
