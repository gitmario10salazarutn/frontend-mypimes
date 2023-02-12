import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//importamos

import { FacComprasComponent } from './components/fac-compras/fac-compras.component';
import { ProveedorComponent } from './components/proveedor/proveedor.component';
import { DetalleComprasComponent } from './components/detalle-compras/detalle-compras.component';
import { VistaMaesDetaComponent } from './components/vista-maes-deta/vista-maes-deta.component';
import { ProductoComponent } from './components/producto/producto.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PersonaComponent } from './components/persona/persona.component';

const routes: Routes = [
  {path:'',component:InicioComponent},
  {path:'fac_compras',component:FacComprasComponent},
  {path:'proveedor',component:ProveedorComponent},
  {path:'producto',component:ProductoComponent},
  {path:'Detalle_compras',component:DetalleComprasComponent},
  {path:'Detalle_compras/:fcom_id_final',component:DetalleComprasComponent},
  {path:'vista-maes-deta/:pro_cedula_ruc/:fcom_id',component:VistaMaesDetaComponent},
  {path:'inicio',component:InicioComponent },



  {path:'persona',component:PersonaComponent},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
