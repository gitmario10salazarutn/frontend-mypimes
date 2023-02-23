import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MultaComponent } from './components/multa/multa.component';
import { TipoDocumentoComponent } from './components/tipo-documento/tipo-documento.component';
import { TipoServicioComponent } from './components/tipo-servicio/tipo-servicio.component';
import { AlicuotaActualizadaComponent } from './components/alicuota-actualizada/alicuota-actualizada.component';
import { ReservacionesComponent } from './components/reservaciones/reservaciones.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { ServicioComponent } from './components/servicio/servicio.component';
import { AlicuotaComponent } from './components/alicuota/alicuota.component';
import { CrearpersonaComponent } from './components/crearpersona/crearpersona.component';

// Componentes
import { LoginComponent } from './components/login/login.component';
import { PersonaComponent } from './components/persona/persona.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

import { EgresosComponent } from './components/egresos/egresos.component';


// Guards
import { AuthGuard } from './utils/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signIn', component: SignInComponent },
  { path: 'dashboard', component: DashboardComponent , canActivate: [AuthGuard]},
  {path:'multa',component:MultaComponent},
  {path:'persona', component:PersonaComponent , },
  {path:'tipo-documento', component:TipoDocumentoComponent},
  {path:'tipo-servicio', component:TipoServicioComponent},
  {path:'alicuota', component:AlicuotaComponent},
  {path:'alicuota-actualizada', component:AlicuotaActualizadaComponent},
  {path:'reservaciones', component:ReservacionesComponent},
  {path:'servicio', component:ServicioComponent},
  {path:'usuario', component:UsuarioComponent},
  {path:'crearpersona', component: CrearpersonaComponent},
  {path: 'egresos', component:EgresosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
