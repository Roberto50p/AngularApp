import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';


@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.page.html',
  styleUrls: ['./pregunta.page.scss'],
})
export class PreguntaPage {
  public usuario: Usuario;
  public respuestaSecreta: string;

  constructor(private router: Router, activatedRoute: ActivatedRoute) {
    this.usuario = new Usuario( );
    this.usuario.recibirUsuario(activatedRoute, router);
    this.respuestaSecreta= '';
    
  }

  recuperarContrasena() {
    // Lógica para validar la respuesta y recuperar la contraseña
    
    if (this.respuestaSecreta === this.usuario.respuestaSecreta ){
      this.usuario.navegarEnviandoUsuario(this.router, "/correcto");
    }else{
      this.usuario.navegarEnviandoUsuario(this.router, "/incorrecto");
    }

    
  }

  

  

  

  iniciarSesion() {
    this.router.navigate(['/login']);
  }
}
