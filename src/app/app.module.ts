import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/componets/header/header.component';
import { FooterComponent } from './footer/componets/footer/footer.component';
import { GaleryComponent } from './galery/componets/galery/galery.component';
import { HomeComponent } from './home/componets/home/home.component';
import { RouterLink } from '@angular/router';
import { ArtistasComponent } from './artistas/componets/artistas/artistas.component';
import { AboutComponent } from './about/componets/about/about.component';
import { FaqComponent } from './faq/componets/faq/faq.component';
import { ContactusComponent } from './contactus/componets/contactus/contactus.component';
import { BlogpageComponent } from './blogpage/componets/blogpage/blogpage.component';
import { Blogpage1Component } from './blogpage1/componets/blogpage1/blogpage1.component';
import { Blogpage2Component } from './blogpage2/componets/blogpage2/blogpage2.component';
import { Blogpage3Component } from './blogpage3/componets/blogpage3/blogpage3.component';
import { Art1Component } from './art1/art1/art1.component';
import { Art2Component } from './art2/art2/art2.component';
import { Art3Component } from './art3/art3/art3.component';
import { Art4Component } from './art4/art4/art4.component';
import { Art5Component } from './art5/art5/art5.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms'; // Importar FormsModule para Template-driven forms
import { HttpClientModule } from '@angular/common/http'; // Importar HttpClientModule para realizar peticiones HTTP
import { CommonModule } from '@angular/common'; // Importar CommonModule para usar directivas comunes como ngIf, ngFor, etc.
import { RouterModule } from '@angular/router'; // Importar RouterModule para usar directivas de enrutamiento   

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    GaleryComponent,
    HomeComponent,
    ArtistasComponent,
    AboutComponent,
    FaqComponent,
    ContactusComponent,
    BlogpageComponent,
    Blogpage1Component,
    Blogpage2Component,
    Blogpage3Component,
    Art1Component,
    Art2Component,
    Art3Component,
    Art4Component,
    Art5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, // Añadir a los imports
    FormsModule, // Añadir a los imports para Template-driven forms
    HttpClientModule, // Añadir a los imports para realizar peticiones HTTP 
    RouterLink
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
