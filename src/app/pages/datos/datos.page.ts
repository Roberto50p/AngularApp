import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, AnimationController } from '@ionic/angular';
import { NivelEducacional } from 'src/app/model/nivel-educacional';
import { Usuario } from 'src/app/model/usuario'; 

@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html',
  styleUrls: ['./datos.page.scss'],
})

export class DatosPage implements OnInit, AfterViewInit {

  @ViewChild('titulo', {read: ElementRef }) itemTitulo!: ElementRef;
  @ViewChild('page', {read: ElementRef }) page!: ElementRef;
  @ViewChild('itemCuenta', {read: ElementRef }) itemCuenta!: ElementRef;
  @ViewChild('itemNombre', {read: ElementRef }) itemNombre!: ElementRef;
  @ViewChild('itemApellido', {read: ElementRef }) itemApellido!: ElementRef;
  @ViewChild('itemCorreo', {read: ElementRef }) itemitemCorreo!: ElementRef;

  public usuario: Usuario = new Usuario();

  public listaNivelesEducacionales = NivelEducacional.getNivelesEducacionales();

  constructor(
    private alertController : AlertController,
    private activatedRoute : ActivatedRoute,
    private router : Router,
    private animationController : AnimationController
  ) 
  {
    this.activatedRoute.queryParams.subscribe(params => {
      const nav = this.router.getCurrentNavigation();
      if (nav) {
        if (nav.extras.state){
          this.usuario = nav.extras.state ['usuario'];
          return;
        }
      }
      // this.router.navigate(['/login']); 
    })
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // public ngOnInit(): void {

  // }

  public ngAfterViewInit(): void{
    if (this.itemTitulo){
      const animation = this.animationController
      .create()
      .addElement(this.itemTitulo.nativeElement)
      .iterations(Infinity)
      .duration(6000)
      .fromTo('transform','translate(0%)', 'translate(100%)')
      animation.play();
    }
  }

  public limpiar1(): void {

  }

  public limpiar2(): void {

  }

  public mostrarDatosPersonales(){

  }

  public animateItem1(elementRef: any, duration: number) {
    
  }

  public animateItem2(elementRef: any, duration: number) {

  }

  createPageTurnAnimation() {

  }

  public mostrarDatosPersona(): void {
    // Si el usuario no ingresa la cuenta, se mostrará un error
    if (this.usuario.cuenta.trim() === '') {
      this.presentAlert('Datos personales', 'Para mostrar los datos de la persona, '
        + 'debe ingresar su cuenta.');
      return;
    }

    // Si el usuario no ingresa al menos el nombre o el apellido, se mostrará un error
    if (this.usuario.nombre.trim() === '' && this.usuario.apellido === '') {
      this.presentAlert('Datos personales', 'Para mostrar los datos de la persona, '
        + 'al menos debe tener un valor para el nombre o el apellido.');
      return;
    }

    // Mostrar un mensaje emergente con los datos de la persona
    let mensaje = `
      <small>
        <br>Cuenta: ${this.usuario.cuenta}
        <br>Usuario: ${this.usuario.correo}
        <br>Nombre: ${this.usuario.nombre}
        <br>Apellido: ${this.usuario.apellido}
        <br>Nacimiento: ${this.formatDateDDMMYYYY(this.usuario.fechaNacimiento)}
      </small>
    `;
    this.presentAlert('Datos personales', mensaje);
  }

  public async presentAlert(titulo: string, mensaje: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: ['OK']
    });

    await alert.present();
  }

  public formatDateDDMMYYYY(date: Date | undefined): string {
    if (!date) return 'No asignada';
    const day = date.getDate().toString().padStart(2, '0'); // Obtener el día y agregar un cero inicial si es necesario
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Obtener el mes (agregando 1) y agregar un cero inicial si es necesario
    const year = date.getFullYear(); // Obtener el año
    return `${day}/${month}/${year}`;
  }

  navegar(pagina: string) {
    this.usuario.navegarEnviandoUsuario(this.router, pagina);
  }

}

  
    
