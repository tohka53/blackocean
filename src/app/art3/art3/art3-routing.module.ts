import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Art3Component } from './art3.component';

const routes: Routes = [

  {
    path: '',
    component: Art3Component  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Art3RoutingModule { }
