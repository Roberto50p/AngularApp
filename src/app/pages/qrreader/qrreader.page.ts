import { Component, ElementRef, OnInit, ViewChild,} from '@angular/core';
import jsQR from 'jsqr';

@Component({
  selector: 'app-qrreader',
  templateUrl: './qrreader.page.html',
  styleUrls: ['./qrreader.page.scss'],
})
export class QrreaderPage implements OnInit {

  //fileinput tira error ya que en mi pagina web no he creado ninguna propiedad llamada fileinput

  @ViewChild('fileinput', { static: false }) private fileinput?: ElementRef;

  @ViewChild('video', { static: false }) private video!: ElementRef;

  @ViewChild('canvas', { static: false }) private canvas!: ElementRef;

  public escaneado = false;
  public datosQR = '';

  constructor() { }

  ngOnInit() {
  }


  public obtenerDatosQR(source?: CanvasImageSource): boolean {
    let w = 0;
    let h = 0;
    if (!source) {
      this.canvas.nativeElement.width = this.video.nativeElement.videoWidth;
      this.canvas.nativeElement.height = this.video.nativeElement.videoWidth;
    }
    w = this.canvas.nativeElement.width
    h = this.canvas.nativeElement.height

    const context: CanvasRenderingContext2D = this.canvas.nativeElement.getContext('2d');
    context.drawImage(source? source : this.video.nativeElement, 0, 0, w, h);
    const img: ImageData = context.getImageData(0, 0, w, h);
    const qrCode = jsQR(img.data, img.width, img.height, {inversionAttempts: 'dontInvert'});
    if (qrCode) {
      this.escaneado = false;
      this.datosQR = qrCode.data;
    }
    return this.datosQR !== '';
  }

  public cargarImagenDesdeArchivo(): void {
    //this.limpiarDatos();
    this.fileinput?.nativeElement.click() 
  }




  // public verificarArchivoConQ(event: Event): void {
  //   // Convertimos el target del evento en un HTMLInputElement para acceder a "files"
  //   const input = event.target as HTMLInputElement;
    
  //   if (input.files && input.files.length > 0) {
  //     const file = input.files[0]; // Obtenemos el primer archivo (o puedes manejar múltiples archivos si lo permites)
  //     console.log('Archivo seleccionado:', file);

  //     // Crear una nueva imagen a partir del archivo seleccionado
  //     const img = new Image();
  //     const reader = new FileReader();

  //     reader.onload = () => {
  //       img.src = reader.result as string;
  //       this.obtenerDatosQR(img);
  //     };

  //     reader.readAsDataURL(file);
  //   } else {
  //     console.error('No se seleccionó ningún archivo.');
  //   }
  // }

  public verificarArchivoConQR(event: Event): void {
    // Hacemos el casting de "event.target" a un HTMLInputElement
    const input = event.target as HTMLInputElement;
  
    // Aseguramos que haya archivos seleccionados
    if (input.files && input.files.length > 0) {
      const file = input.files[0]; // Obtenemos el primer archivo (o puedes manejar múltiples archivos si lo permites)
      console.log('Archivo seleccionado:', file);
  
      // Crear una nueva imagen a partir del archivo seleccionado
      const img = new Image();
      const reader = new FileReader();
  
      reader.onload = () => {
        img.src = reader.result as string;
        this.obtenerDatosQR(img);
      };
  
      reader.readAsDataURL(file);
    } else {
      console.error('No se seleccionó ningún archivo.');
    }
  }
}


