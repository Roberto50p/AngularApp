import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, 
            IonicModule.forRoot({ innerHTMLTemplatesEnabled: true }), 
            AppRoutingModule, 
            BrowserAnimationsModule,
            MatDatepickerModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
              provideAnimationsAsync(),
              {provide: LOCALE_ID,
              useValue: 'es-CL'}],
  bootstrap: [AppComponent],
})
export class AppModule {}
