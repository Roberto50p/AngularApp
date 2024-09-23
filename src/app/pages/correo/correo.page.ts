import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Usuario } from 'src/app/model/usuario';


@Component({
  selector: 'app-correo',
  templateUrl: './correo.page.html',
  styleUrls: ['./correo.page.scss'],
})
export class CorreoPage {
  email: string;

  constructor(private router: Router, private toastController: ToastController) {
    this.email='';
  }

  recuperarContrasena() {
    // Lógica para recuperar la contraseña}
    const usu = Usuario.getListaUsuarios().find(u => u.correo==this.email);
    if (usu){
      usu!.navegarEnviandoUsuario(this.router, "/pregunta");
    } else {
      new Usuario().navegarEnviandoUsuario(this.router, "/incorrecto");
    }
  }

  iniciarSesion() {
    // Navega a la página de inicio de sesión
    this.router.navigate(['/login']);
  }

  async mostrarMensaje(mensaje: string, duracion?:number){
    const toast = await this.toastController.create({
      message: mensaje,
      duration: duracion? duracion: 2000
    });
    toast.present();
  }
}

