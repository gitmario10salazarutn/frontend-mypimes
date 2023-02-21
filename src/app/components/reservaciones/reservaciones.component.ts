import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { ModelReservaciones } from 'src/app/Model/model.reservaciones';
import { ReservacionesService } from 'src/app/services/reservaciones.service';

import { ModelTipoServicio } from 'src/app/Model/model.tipo_servicio';
import { TipoServicioService } from 'src/app/services/tipo-servicio.service';

import { ModelServicio } from 'src/app/Model/model.servicio';
import { ServicioService } from 'src/app/services/servicio.service';





@Component({
  selector: 'app-reservaciones',
  templateUrl: './reservaciones.component.html',
  styleUrls: ['./reservaciones.component.css']
})
export class ReservacionesComponent {

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private tiposervicioService:TipoServicioService,
    private servicioService:ServicioService,
    private reservacionesService:ReservacionesService

  ) { }

  public form!:FormGroup;
  cargar_tiposervicio:ModelTipoServicio[]=[];
  cargar_servicio:ModelServicio[]=[];
  cargar_reservaciones:ModelReservaciones[]=[];

  public informacionReservaciones={

    resv_idreservacion:"",
    resv_fecha: "",
    resv_descripcion: "",
    servicios:"",
    serv_idservicios: "",
    serv_cantidad: "",
    serv_descripcion:"",
    serv_iva: "",
    serv_nombreservicio: "",
    serv_valor:"",
    tipo_servicio:"",
    tipserv_id: "",
    tipserv_nombre:""

    }

    ngOnInit(): void {
     this.cargarServicio()
      this.cargartipoServicio()
      this.cargarReservaciones()



      this.form = this.formBuilder.group({
        txtresv_idreservacion: [''],
        txtresv_fecha: [''],
        txtresv_descripcion: [''],
        idserviciosSelected: [null, [Validators.required]],
        txtserv_cantidad: [''],
        txtserv_descripcion: [''],
        txtserv_iva: [''],
        txtserv_nombreservicio:[''],
        txtserv_valor:[''],
        idtiposervicioSelected: [null, [Validators.required]],
        txttipserv_id: [''],
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

  public cargarReservaciones() {
    this.reservacionesService.getReservaciones().subscribe(
      (reservaciones: any) => {
        this.cargar_reservaciones= reservaciones
        console.log(this.cargar_reservaciones)
      },(error)=>{
        console.warn(error)
      }
    )

  }



  public crearReservaciones() {
    this.reservacionesService.postcreateReservaciones({
      resv_idreservacion:this.form.value.txtresv_idreservacion,
      resv_fecha: this.form.value.txtresv_fecha,
      resv_descripcion:this.form.value.txtresv_descripcion,
      serv_idservicios:this.form.value.idserviciosSelected,
      tipo_servicio:this.form.value.idtiposervicioSelected,

    }).subscribe(
      respuesta => {
        console.log('Reservaciones creada correctamente');
        this.form.reset();
        this.cargarReservaciones();
      }
    )
  }

  public infoUpdateReservaciones(resv_idreservacion:any,resv_fecha:any,resv_descripcion:any,serv_idservicios:any,serv_cantidad:any,serv_descripcion:any,serv_iva:any, serv_nombreservicio:any,serv_valor:any, tipserv_id:any , tipserv_nombre:any){
    this.informacionReservaciones.resv_idreservacion=resv_idreservacion;
    this.informacionReservaciones.resv_fecha=resv_fecha;
    this.informacionReservaciones.resv_descripcion=resv_descripcion;
    this.informacionReservaciones.serv_idservicios=serv_idservicios;
     this.informacionReservaciones.serv_nombreservicio=serv_nombreservicio;
     this.informacionReservaciones.serv_descripcion=serv_descripcion;
     this.informacionReservaciones.serv_valor=serv_valor;
     this.informacionReservaciones.serv_iva=serv_iva;
     this.informacionReservaciones.serv_cantidad=serv_cantidad;
     this.informacionReservaciones.tipserv_id=tipserv_id;
     this.informacionReservaciones.tipserv_nombre=tipserv_nombre;
   }


   public actualizarReservaciones(resv_idreservacion:any){

    this.reservacionesService.putUpdateReservaciones({
      resv_idreservacion:this.form.value.txtresv_idreservacion,
      resv_fecha: this.form.value.txtresv_fecha,
      resv_descripcion:this.form.value.txtresv_descripcion,
      serv_idservicios:this.form.value.idserviciosSelected,
      tipo_servicio:this.form.value.idtiposervicioSelected,


    },resv_idreservacion).subscribe(
      respuesta=>{
        console.log('Reservaciones actualizada correctamente');
        this.form.reset();
        this.cargarReservaciones();

      }
    )
  }

  public deletealiActualizada(resv_idreservacion: any) {

    this.reservacionesService.deleteFisicoReservaciones(resv_idreservacion).subscribe(
      respuesta => {
        console.log('Reservaciones Actualizada eliminada correctamente');

        this.cargarReservaciones()
      }
    )
  }



}
