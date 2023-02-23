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

}
