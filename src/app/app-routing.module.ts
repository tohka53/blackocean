import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [


  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },  
  {
    path: 'galery',
    loadChildren: () => import('./galery/galery.module').then(m => m.GaleryModule)
  },  
  {
    path: 'artistas',
    loadChildren: () => import('./artistas/artistas.module').then(m => m.ArtistasModule)
  },  
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
  },  
  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then(m => m.FaqModule)
  },  
  {
    path: 'contactus',
    loadChildren: () => import('./contactus/contactus.module').then(m => m.ContactusModule)
  },  
  {
    path: 'blogpage',
    loadChildren: () => import('./blogpage/blogpage.module').then(m => m.BlogpageModule)
  },  

  {
    
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
