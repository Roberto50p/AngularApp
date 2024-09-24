import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { RouteReuseStrategy } from '@angular/router';
import { DatosPageRoutingModule } from './datos-routing.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DatosPage } from './datos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatosPageRoutingModule,
    MatDatepickerModule
  ],
  declarations: [DatosPage]
})
export class DatosPageModule {}
