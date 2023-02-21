import { BrowserModule } from '@angular/platform-browser';

import { importProvidersFrom, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MultaComponent } from './components/multa/multa.component';
import { PersonaComponent } from './components/persona/persona.component';
import { TipoDocumentoComponent } from './components/tipo-documento/tipo-documento.component';
import { TipoServicioComponent } from './components/tipo-servicio/tipo-servicio.component';
import { AlicuotaActualizadaComponent } from './components/alicuota-actualizada/alicuota-actualizada.component';
import { ReservacionesComponent } from './components/reservaciones/reservaciones.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Modulos
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

// Componentes
import { LoginComponent } from './components/login/login.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { AddTokenInterceptor } from './utils/add-token.interceptor';
import { ServicioComponent } from './components/servicio/servicio.component';
import { AlicuotaComponent } from './components/alicuota/alicuota.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignInComponent,
    DashboardComponent,
    NavbarComponent,
    SpinnerComponent,
    MultaComponent,
    PersonaComponent,
    TipoDocumentoComponent,
    TipoServicioComponent,
    AlicuotaActualizadaComponent,
    ReservacionesComponent,
    UsuarioComponent,
    ServicioComponent,
    AlicuotaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }), // ToastrModule added
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AddTokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
