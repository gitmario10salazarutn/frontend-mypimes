import { Component } from '@angular/core';
import { FormBuilder, FormGroup , Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { ModelAlicuota } from 'src/app/Model/model.alicuota';
import { AlicuotaService } from 'src/app/services/alicuota.service';


import { ModelMulta } from 'src/app/Model/model.multa';
import { MultaService } from 'src/app/services/multa.service';



@Component({
  selector: 'app-alicuota',
  templateUrl: './alicuota.component.html',
  styleUrls: ['./alicuota.component.css']
})




export class AlicuotaComponent {

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private multaService:MultaService,
    private alicuotaService:AlicuotaService,


  ) { }

  public form!:FormGroup;
  cargar_multa:ModelMulta[]=[];
  cargar_alicuota:ModelAlicuota[]=[];

  public informacionAlicuota={

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

     this.form = this.formBuilder.group({
       txtali_idalicuota: [''],
       txtali_valor_anterior: [''],
       txtali_valor_actual: [''],
       txtali_fecha_actualizacion: [''],
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

  public crearAlicuota() {
    console.log(""+this.form.value.idmultaSelected);
    this.alicuotaService.postAlicuota({

      ali_idalicuota:this.form.value.txtali_idalicuota,
      ali_valor_anterior: this.form.value.txtali_valor_anterior,
      ali_valor_actual:this.form.value.txtali_valor_actual,
      ali_fecha_actualizacion:this.form.value.txtali_fecha_actualizacion,
      estado_delete_alicuota:"true",
      mult_idmulta:this.form.value.idmultaSelected,


    }).subscribe(
      respuesta => {
        console.log('Alicuota creada correctamente');
        this.form.reset();
        this.cargarAlicuota();
      }
    )
  }


  public infoUpdateAlicuota(ali_idalicuota:any,ali_valor_anterior:any,ali_valor_actual:any,ali_fecha_actualizacion:any,mult_idmulta:any, mult_nombre:any, mult_valor:any ){
    this.informacionAlicuota.ali_idalicuota=ali_idalicuota;
     this.informacionAlicuota.ali_valor_anterior=ali_valor_anterior;
     this.informacionAlicuota.ali_valor_actual=ali_valor_actual;
     this.informacionAlicuota.ali_fecha_actualizacion=ali_fecha_actualizacion;
     this.informacionAlicuota.mult_idmulta=mult_idmulta;
     this.informacionAlicuota.mult_nombre=mult_nombre;
     this.informacionAlicuota.mult_valor=mult_valor;

   }


   public actualizarAlicuota(ali_idalicuota:any){

    this.alicuotaService.putUpdateAlicuota({
      ali_idalicuota:this.form.value.txtali_idalicuota,
      ali_valor_anterior: this.form.value.txtali_valor_anterior,
      ali_valor_actual:this.form.value.txtali_valor_actual,
      ali_fecha_actualizacion:this.form.value.txtali_fecha_actualizacion,
      //estado_delete_alicuota:"true",
      mult_idmulta:this.form.value.idmultaSelected,

      //mult_nombre:this.form.value.txtmult_nombre,
      //mult_valor:this.form.value.txtmult_valor,


    },ali_idalicuota).subscribe(
      respuesta=>{
        console.log('Alicuota actualizada correctamente');
        this.form.reset();
        this.cargarAlicuota();

      }
    )
  }


  public deleteAlicuota(ali_idalicuota:any)
  {
    this.alicuotaService.deleteFisicoAlicuota(ali_idalicuota).subscribe(
      respuesta=>{
        console.log('Servicio Eliminada correctamente');
        this.cargarAlicuota()
      }
    )
  }















































}
