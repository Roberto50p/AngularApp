import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-incorrecto',
  templateUrl: './incorrecto.page.html',
  styleUrls: ['./incorrecto.page.scss'],
})
export class IncorrectoPage {
  imagen: string = 'ruta/de/tu/imagen-error.png'; // Modifica esta ruta cuando agregues la imagen

  constructor(private router: Router) {}

  iniciarSesion() {
    this.router.navigate(['/login']);
  }
}
