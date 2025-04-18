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
    path: 'artist1',
    loadChildren: () => import('./art1/art1/art1.module').then(m => m.Art1Module)
  },  
  {
    path: 'artist2',
    loadChildren: () => import('./art2/art2/art2.module').then(m => m.Art2Module)
  }, 
  {
    path: 'artist3',
    loadChildren: () => import('./art3/art3/art3.module').then(m => m.Art3Module)
  }, 
  {
    path: 'artist4',
    loadChildren: () => import('./art4/art4/art4.module').then(m => m.Art4Module)
  }, 
  {
    path: 'artist5',
    loadChildren: () => import('./art5/art5/art5.module').then(m => m.Art5Module)
  }, 
  {
    path: 'comnta',
    loadChildren: () => import('./cola/cola/cola.module').then(m => m.ColaModule)
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

