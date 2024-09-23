import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-correcto',
  templateUrl: './correcto.page.html',
  styleUrls: ['./correcto.page.scss'],
})
export class CorrectoPage {
  imagen: string = 'ruta/de/tu/imagen.png'; // Modifica esta ruta cuando agregues la imagen

  constructor(private router: Router) {}

  iniciarSesion() {
    this.router.navigate(['/login']);
  }
}
