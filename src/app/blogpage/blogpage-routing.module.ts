import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogpageComponent } from './componets/blogpage/blogpage.component';

const routes: Routes = [

  {
    path: '',
    component: BlogpageComponent  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogpageRoutingModule { }
