import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


import { ModelServicio } from 'src/app/Model/model.servicio';
import { ServicioService } from 'src/app/services/servicio.service';

import { ModelTipoServicio } from 'src/app/Model/model.tipo_servicio';
import { TipoServicioService } from 'src/app/services/tipo-servicio.service';


@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private tiposervicioService:TipoServicioService,
    private servicioService:ServicioService,


  ) { }


  public form!:FormGroup;
  cargar_tiposervicio:ModelTipoServicio[]=[];
  cargar_servicio:ModelServicio[]=[];

  public informacionServicio={

    serv_idservicios: "",
    serv_nombreservicio: "",
    serv_descripcion: "",
    serv_valor: "",
    serv_iva: "",
    serv_cantidad: "",
    estado_delete_serv: "",
    tipserv_id:"",
    tipserv_nombre: ""

  }

  ngOnInit(): void {
      this.cargarServicio()
       this.cargartipoServicio()

       this.form = this.formBuilder.group({
         txtrserv_idservicios: [''],
         txtserv_nombreservicio: [''],
         txtserv_descripcion: [''],
         txtserv_valor: [''],
         txtserv_iva: [''],
         txtserv_cantidad: [''],
         idtiposervicioSelected: [null, [Validators.required]],
         txttipserv_nombre:['']

       })
  }

  public cargartipoServicio() {
      this.tiposervicioService.getTipoServicio().subscribe(
        (tiposervicio: any) => {
          this.cargar_tiposervicio= tiposervicio
          console.log(this.cargar_tiposervicio)
        },(error)=>{
          console.warn(error)
        }
      )

  }

  public cargarServicio() {
    this.servicioService.getServicio().subscribe(
      (servicio: any) => {
        this.cargar_servicio= servicio
        console.log(this.cargar_servicio)
      },(error)=>{
        console.warn(error)
      }
    )

  }


  public crearServicio() {
    this.servicioService.postServicio({
      serv_idservicios:this.form.value.txtserv_idservicios,
      serv_nombreservicio: this.form.value.txtserv_nombreservicio,
      serv_descripcion:this.form.value.txtserv_descripcion,
      serv_valor:this.form.value.txtserv_valor,
      serv_iva:this.form.value.txtserv_iva,
      serv_cantidad:this.form.value.txtserv_cantidad,
      tipserv_id:this.form.value.idtiposervicioSelected,
      //tipserv_nombre:this.form.value.txttipserv_nombre

    }).subscribe(
      respuesta => {
        console.log('Servicio creada correctamente');
        this.form.reset();
        this.cargarServicio();
      }
    )
  }



  public infoUpdateServicio(serv_idservicios:any,serv_nombreservicio:any,serv_descripcion:any,serv_valor:any,serv_iva:any, serv_cantidad:any, tipserv_id:any , tipserv_nombre:any){
    this.informacionServicio.serv_idservicios=serv_idservicios;
     this.informacionServicio.serv_nombreservicio=serv_nombreservicio;
     this.informacionServicio.serv_descripcion=serv_descripcion;
     this.informacionServicio.serv_valor=serv_valor;
     this.informacionServicio.serv_iva=serv_iva;
     this.informacionServicio.serv_cantidad=serv_cantidad;
     this.informacionServicio.tipserv_id=tipserv_id;
     this.informacionServicio.tipserv_nombre=tipserv_nombre;
   }



   public actualizarServicio(serv_idservicios:any){

    this.servicioService.putUpdateServicio({
     serv_idservicios:this.form.value.txtserv_idservicios,
     serv_nombreservicio: this.form.value.txtserv_nombreservicio,
     serv_descripcion:this.form.value.txtserv_descripcion,
     serv_valor:this.form.value.txtserv_valor,
     serv_iva:this.form.value.txtserv_iva,
     serv_cantidad:this.form.value.txtserv_cantidad,
     tipserv_id:this.form.value.idtiposervicioSelected,
     tipserv_nombre:this.form.value.txttipserv_nombre


    },serv_idservicios).subscribe(
      respuesta=>{
        console.log('Servicio actualizada correctamente');
        this.form.reset();
        this.cargarServicio();

      }
    )
  }


  public deleteServicio(serv_idservicios:any)
  {
    this.servicioService.deleteFisicoServicio(serv_idservicios).subscribe(
      respuesta=>{
        console.log('Servicio Eliminada correctamente');
        this.cargarServicio()
      }
    )
  }







}
