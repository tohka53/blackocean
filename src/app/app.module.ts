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
    Blogpage3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    RouterLink
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
