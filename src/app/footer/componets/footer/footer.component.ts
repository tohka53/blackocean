import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {
  currentYear: number = 0;
  showModal: boolean = false;

  ngOnInit(): void {
    this.currentYear = new Date().getFullYear();
  }

  copyEmail(): void {
    navigator.clipboard.writeText('mecg1994@gmail.com');
    // Opcional: puedes agregar una notificación o mensaje aquí
  }
}