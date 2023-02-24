import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { ModelEgresos } from 'src/app/Model/model.egresos';
import { EgresosService } from 'src/app/services/egresos.service';


@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css']
})
export class EgresosComponent implements OnInit {


  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private egresosService: EgresosService,

  ) { }

  public form!:FormGroup;
  Cargar_egresos: ModelEgresos[]=[];

  
  public informacionEgresos={

    egre_id: "",
    tes_idtesorero: "",
    egre_descripcion: "",
    egre_subtotal: "",
    egre_iva: "",
    egre_total: "",
    egre_fecha: "",
    egre_numero: "",
    egre_estado_delete: ""

  }


  ngOnInit(): void {
    this.cargarEgresos()
     this.form= this.formBuilder.group({
      txtegre_id: [''],
      txttes_idtesorero: [''],
      txtegre_descripcion: [''],
      txtegre_subtotal: [''],
      txtegre_iva: [''],
      txtegre_total: [''],
      txtegre_fecha: [''],
      txtegre_numero: [''],
      txtegre_estado_delete: ['']
    })
  }
  


  public cargarEgresos(){
    this.egresosService.getEgresos().subscribe(
      (egreso:any)=> {
        this.Cargar_egresos=egreso
        console.log(this.Cargar_egresos)
      },(error)=>{
        console.warn(error)
      }
    )
  }

  public deleteEgreso(egre_id:any)
  {
    this.egresosService.deleteFisicoEgreso(egre_id).subscribe(
      respuesta=>{
        console.log('Egreso Eliminada correctamente');
        this.cargarEgresos()
      }
    )
  }



  //////////////////////////////////7

  public infoUpdateEgreso(egre_id:any, tes_idtesorero:any, egre_descripcion:any, egre_subtotal:any, egre_iva:any, egre_total: any, egre_fecha:any, egre_numero:any, egre_estado_delete:any) {

    this.informacionEgresos.egre_id = egre_id,
    this.informacionEgresos.tes_idtesorero = tes_idtesorero,
    this.informacionEgresos.egre_descripcion = egre_descripcion,
    this.informacionEgresos.egre_subtotal= egre_subtotal,
    this.informacionEgresos.egre_iva = egre_iva,
    this.informacionEgresos.egre_total = egre_total,
    this.informacionEgresos.egre_fecha = egre_fecha,
    this.informacionEgresos.egre_numero= egre_numero,
    this.informacionEgresos.egre_estado_delete= egre_estado_delete
    
}

public actualizarEgreso(egre_id: any) {
  console.log(egre_id+"....");
  this.egresosService.putUpdateEgreso({

    egre_id: this.form.value.txtegre_id,
    tes_idtesorero: this.form.value.txttes_idtesorero,
    egre_descripcion: this.form.value.txtegre_descripcion,
    egre_subtotal: this.form.value.txtegre_subtotal,
    egre_iva: this.form.value.txtegre_iva,
    egre_total: this.form.value.txtegre_total,
    egre_fecha: this.form.value.txtegre_fecha,
    egre_numero: this.form.value.txtegre_numero,
    egre_estado_delete: this.form.value.txtegre_estado_delete


  },egre_id).subscribe(
    respuesta => {
      console.log('Egreso actualizado correctamente');

      this.form.reset()
      this.cargarEgresos()

    }
  )
}



  

}
