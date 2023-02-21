import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ModelTipoDocumento } from 'src/app/Model/model.tipo_documento';
import { TipoDocumentoService } from 'src/app/services/tipo-documento.service';


@Component({
  selector: 'app-tipo-documento',
  templateUrl: './tipo-documento.component.html',
  styleUrls: ['./tipo-documento.component.css']
})
export class TipoDocumentoComponent implements OnInit{

  public tipodocumentos: ModelTipoDocumento[] = []
  public form!: FormGroup;

  public informacionTipoDocumento = {
    tipdoc_id: -1,
    tipdoc_nombre: "",

  }

  constructor(
    private formBuilder: FormBuilder,
    private tipodocumentoService: TipoDocumentoService) { }

    ngOnInit(): void {
      this.cargartipoDocumento();

      this.form = this.formBuilder.group({
        txttipdoc_id: [''],
        txttipdoc_nombre: ['']
      })
    }

    //Cargar
    public cargartipoDocumento() {
      this.tipodocumentoService.getTipoDocumentos().subscribe(
        (tipodocumento: any) => {
          this.tipodocumentos = tipodocumento
          console.log(this.tipodocumentos)
        }, (error) => console.log(error)
      )
    }

  //Crear
  public creartipoDocumento() {

    this.tipodocumentoService.postTipoDocumento({

      tipdoc_id: this.form.value.txttipdoc_id,
      tipdoc_nombre:this.form.value.txttipdoc_nombre,


    }).subscribe(
      respuesta => {
        console.log('Tipo documento creada correctamente');
        this.form.reset()
        this.cargartipoDocumento();
      }
    )
  }

 //Recoleccion de datos para Actualizar
 public infoUpdatetipoDocumento(tipdoc_id:any, tipdoc_nombre:any) {

  this.informacionTipoDocumento.tipdoc_id = tipdoc_id,
  this.informacionTipoDocumento.tipdoc_nombre = tipdoc_nombre
}


public actualizartipoDocumento(tipdoc_id: any) {
  console.log(tipdoc_id+"....");
  this.tipodocumentoService.putUpdateTipoDocumento({

    tipdoc_id: this.form.value.txttipdoc_id,
    tipdoc_nombre:this.form.value.txttipdoc_nombre

  },tipdoc_id).subscribe(
    respuesta => {
      console.log('Tipo documento actualizada correctamente');

      this.form.reset()
      this.cargartipoDocumento()

    }
  )
}


 //Eliminado Físico Persona
 public eliminarFisicotipoDocumento(tipdoc_id: any) {

  this.tipodocumentoService.deleteFisicoTipoDocumento(tipdoc_id).subscribe(
    respuesta => {
      console.log('Tipo Documento eliminada correctamente');
      console.log(tipdoc_id)
      this.cargartipoDocumento()
    }
  )
}























}
