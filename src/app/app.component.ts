import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import * as flowbite from 'flowbite';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import { AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    // Solo inicializa Flowbite en el navegador, no en el servidor
    if (isPlatformBrowser(this.platformId)) {
      flowbite.initFlowbite();
    }
  }
}