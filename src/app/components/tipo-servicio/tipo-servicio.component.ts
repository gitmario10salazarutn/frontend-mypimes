import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ModelTipoServicio } from 'src/app/Model/model.tipo_servicio';
import { TipoServicioService } from 'src/app/services/tipo-servicio.service';

@Component({
  selector: 'app-tipo-servicio',
  templateUrl: './tipo-servicio.component.html',
  styleUrls: ['./tipo-servicio.component.css']
})
export class TipoServicioComponent implements OnInit{

  public tiposervicios: ModelTipoServicio[] = []
  public form!: FormGroup;

public informacionTipoServicio = {
  tipserv_id: -1,
  tipserv_nombre: "",

  }

  constructor(
    private formBuilder: FormBuilder,
    private tiposervicioService: TipoServicioService) { }

    ngOnInit(): void {
      this.cargartipoServicio();

      this.form = this.formBuilder.group({
        txttipserv_id: [''],
        txttipserv_nombre: ['']
      })
    }

     //Cargar
     public cargartipoServicio() {
      this.tiposervicioService.getTipoServicio().subscribe(
        (tiposervicio: any) => {
          this.tiposervicios = tiposervicio
          console.log(this.tiposervicios)
        }, (error) => console.log(error)
      )
    }


    //Crear
  public creartipoServicio() {

    this.tiposervicioService.postTipoServicio({

      tipserv_id: this.form.value.txttipserv_id,
      tipserv_nombre:this.form.value.txttipserv_nombre,


    }).subscribe(
      respuesta => {
        console.log('Tipo servicio creada correctamente');
        this.form.reset()
        this.cargartipoServicio();
      }
    )
  }

 //Recoleccion de datos para Actualizar
 public infoUpdatetipoServicio(tipserv_id:any, tipserv_nombre:any) {

  this.informacionTipoServicio.tipserv_id = tipserv_id,
  this.informacionTipoServicio.tipserv_nombre = tipserv_nombre
}
//Actualizar

public actualizartipoServicio(tipserv_id: any) {
  console.log(tipserv_id+"....");
  this.tiposervicioService.putUpdateTipoServicio({

    tipserv_id: this.form.value.txttipserv_id,
    tipserv_nombre:this.form.value.txttipserv_nombre

  },tipserv_id).subscribe(
    respuesta => {
      console.log('Tipo servicio actualizada correctamente');

      this.form.reset()
      this.cargartipoServicio()

    }
  )
}


 //Eliminado Físico Persona
 public eliminarFisicotipoServicio(tipserv_id: any) {

  this.tiposervicioService.deleteFisicoTipoServicio(tipserv_id).subscribe(
    respuesta => {
      console.log('Tipo servicio eliminada correctamente');
      console.log(tipserv_id)
      this.cargartipoServicio()
    }
  )
}




}
