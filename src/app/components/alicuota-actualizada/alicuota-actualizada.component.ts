import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModelAlicuotaActualizada } from 'src/app/Model/model.alicuota_actualizada';
import { AlicuotaActualizadaService } from 'src/app/services/alicuota-actualizada.service';
import { ActivatedRoute } from '@angular/router';
import { ModelAlicuota } from 'src/app/Model/model.alicuota';
import { AlicuotaService } from 'src/app/services/alicuota.service';


import { ModelMulta } from 'src/app/Model/model.multa';
import { MultaService } from 'src/app/services/multa.service';



@Component({
  selector: 'app-alicuota-actualizada',
  templateUrl: './alicuota-actualizada.component.html',
  styleUrls: ['./alicuota-actualizada.component.css']
})


export class AlicuotaActualizadaComponent {


  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private multaService:MultaService,
    private alicuotaService:AlicuotaService,
    private aliactualizadaService: AlicuotaActualizadaService


  ) { }


  public form!: FormGroup;
  cargar_multa:ModelMulta[]=[]
  cargar_alicuota:ModelAlicuota[]=[]
  cargar_aliactualizada: ModelAlicuotaActualizada[] = []


  public informacionaliActualizada = {

    alic_id:"",
    alic_valor:"",
    alic_fecha:"",
    alicuota:"",
    ali_idalicuota: "",
    ali_valor_anterior: "",
    ali_valor_actual: "",
    ali_fecha_actualizacion: "",
    estado_delete_alicuota: "",
    multa:"",
    mult_idmulta:"",
    mult_nombre: "",
    mult_valor: ""

    }



    ngOnInit(): void {
      this.cargarMulta()
       this.cargarAlicuota()
       this.cargaraliActuazalizada()



       this.form = this.formBuilder.group({
         txtalic_id: [''],
         txtalic_valor: [''],
         txtalic_fecha: [''],

         idalicuotaSelected:[null, [Validators.required]],
         txtali_valor_anterior:[''],
         txtali_valor_actual:[''],
         txtali_fecha_actualizacion:[''],
         idmultaSelected:[null, [Validators.required]],

         txtmult_nombre:[''],
         txtmult_valor:['']


       })
    }



    public cargarMulta() {
      this.multaService.getMulta().subscribe(
        (multa: any) => {
          this.cargar_multa= multa
          console.log(this.cargar_multa)
        },(error)=>{
          console.warn(error)
        }
      )

    }




    public cargarAlicuota() {
      this.alicuotaService.getAlicuota().subscribe(

        (alicuota: any) => {
          this.cargar_alicuota= alicuota
          console.log(this.cargar_alicuota)
        },(error)=>{
          console.warn(error)
        }
      )

    }


    public cargaraliActuazalizada() {
      this.aliactualizadaService.getaliActualizada().subscribe(

        (aliactualizada: any) => {
          this.cargar_aliactualizada= aliactualizada
          console.log(this.cargar_aliactualizada)
        },(error)=>{
          console.warn(error)
        }
      )

    }



    //Crear
    public crearaliActualizada() {
      console.log(""+this.form.value.idalicuotaSelected);
      this.aliactualizadaService.postaliActualizada({

        alic_id:this.form.value.txtalic_id,
        alic_valor: this.form.value.txtalic_valor,
        alic_fecha:this.form.value.txtalic_fecha,
        ali_idalicuota:this.form.value.idalicuotaSelected,
        estado_delete_alicuota:"true",
        mult_idmulta:this.form.value.idmultaSelected,

      }).subscribe(
        respuesta => {
          console.log('Alicuota Actualizada creada correctamente');
          this.form.reset()
          this.cargaraliActuazalizada();
        }
      )
    }


   //Recoleccion de datos para Actualizar
   public infoUpdatealiActualizada(alic_id:any, alic_valor:any, alic_fecha:any, ali_idalicuota:any,ali_valor_anterior:any,ali_valor_actual:any,ali_fecha_actualizacion:any,mult_idmulta:any, mult_nombre:any, mult_valor:any ){
    this.informacionaliActualizada.alic_id=alic_id;
    this.informacionaliActualizada.alic_valor=alic_valor;
    this.informacionaliActualizada.alic_fecha=alic_fecha;
     this.informacionaliActualizada.ali_idalicuota=ali_idalicuota;
     this.informacionaliActualizada.ali_valor_anterior=ali_valor_anterior;
     this.informacionaliActualizada.ali_valor_actual=ali_valor_actual;
     this.informacionaliActualizada.ali_fecha_actualizacion=ali_fecha_actualizacion;
     this.informacionaliActualizada.mult_idmulta=mult_idmulta;
     this.informacionaliActualizada.mult_nombre=mult_nombre;
     this.informacionaliActualizada.mult_valor=mult_valor;

   }



  //Actualizar

  public actualizaraliActualizada(alic_id:any){

    this.aliactualizadaService.putUpdatealiActualizada({
      alic_id:this.form.value.txtalic_id,
      alic_valor: this.form.value.txtalic_valor,
      alic_fecha:this.form.value.txtalic_fecha,
      ali_idalicuota:this.form.value.idalicuotaSelected,
      mult_idmulta:this.form.value.idmultaSelected,


    },alic_id).subscribe(
      respuesta=>{
        console.log('Alicuota actualizada correctamente');
        this.form.reset();
        this.cargarAlicuota();

      }
    )
  }

 //Eliminado
 public deletealiActualizada(alic_id: any) {

  this.aliactualizadaService.deleteFisicoaliActualizada(alic_id).subscribe(
    respuesta => {
      console.log('Alicuota Actualizada eliminada correctamente');

      this.cargaraliActuazalizada()
    }
  )
}

























}
