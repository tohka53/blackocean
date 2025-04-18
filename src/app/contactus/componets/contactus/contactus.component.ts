import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements AfterViewInit {
  // Propiedad para almacenar el ID único
  uniqueID: string = '';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    // Genera un ID único al inicializar el componente
    this.generateUniqueID();
  }

  ngAfterViewInit() {
    // Verificar si estamos en el navegador
    if (isPlatformBrowser(this.platformId)) {
      // Esperar a que el DOM esté completamente cargado
      setTimeout(() => {
        this.updateHiddenFields();
      }, 300);
    }
  }

  /**
   * Genera un ID único para la solicitud de tatuaje
   */
  generateUniqueID() {
    const timestamp = new Date().getTime().toString();
    const randomStr = Math.random().toString(36).substring(2, 8).toUpperCase();
    this.uniqueID = `TAT-${timestamp.slice(-6)}-${randomStr}`;
    console.log('Generated ID:', this.uniqueID);
  }

  /**
   * Actualiza los campos ocultos en el formulario
   */
  updateHiddenFields() {
    if (isPlatformBrowser(this.platformId)) {
      // Actualizar el campo de ID único que ya existe en el HTML
      const idField = document.getElementById('uniqueID') as HTMLInputElement;
      if (idField) {
        idField.value = this.uniqueID;
        console.log('ID field updated:', idField.value);
      }

      // Actualizar el campo de asunto
      const subjectField = document.getElementById('subjectField') as HTMLInputElement;
      if (subjectField) {
        subjectField.value = `New tattoo request! ID: ${this.uniqueID}`;
        console.log('Subject updated:', subjectField.value);
      }
    }
  }
}