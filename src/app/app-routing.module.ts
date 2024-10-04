import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'leerqr',
    loadChildren: () => import('./pages/leerqr/leerqr.module').then( m => m.LeerqrPageModule)
  },
  {
    path: 'correo',
    loadChildren: () => import('./pages/correo/correo.module').then( m => m.CorreoPageModule)
  },
  {
    path: 'pregunta',
    loadChildren: () => import('./pages/pregunta/pregunta.module').then( m => m.PreguntaPageModule)
  },
  {
    path: 'correcto',
    loadChildren: () => import('./pages/correcto/correcto.module').then( m => m.CorrectoPageModule)
  },
  {
    path: 'incorrecto',
    loadChildren: () => import('./pages/incorrecto/incorrecto.module').then( m => m.IncorrectoPageModule)
  },
  {
    path: 'datos',
    loadChildren: () => import('./pages/datos/datos.module').then( m => m.DatosPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
