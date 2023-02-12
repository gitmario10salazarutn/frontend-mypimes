import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProveedorComponent } from './components/proveedor/proveedor.component';
import { FacComprasComponent } from './components/fac-compras/fac-compras.component';
import { DetalleComprasComponent } from './components/detalle-compras/detalle-compras.component';
import { ProductoComponent } from './components/producto/producto.component';
import { VistaMaesDetaComponent } from './components/vista-maes-deta/vista-maes-deta.component';
import { PersonaComponent } from './components/persona/persona.component';


@NgModule({
  declarations: [

    AppComponent,

    ProveedorComponent,
    FacComprasComponent,
    DetalleComprasComponent,
    ProductoComponent,
    VistaMaesDetaComponent,
    PersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
