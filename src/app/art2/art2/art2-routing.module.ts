import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Art2Component } from './art2.component';

const routes: Routes = [
  {
    path: '',
    component: Art2Component  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Art2RoutingModule { }
