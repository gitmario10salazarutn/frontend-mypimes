import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ModelMulta } from 'src/app/Model/model.multa';
import { MultaService } from 'src/app/services/multa.service';

@Component({
  selector: 'app-multa',
  templateUrl: './multa.component.html',
  styleUrls: ['./multa.component.css']
})
export class MultaComponent implements OnInit{

  public multas: ModelMulta[] = []
  public form!: FormGroup;

  //Información de multa
  public informacionMulta = {
    mult_idmulta: -1,
    mult_nombre: "",
    mult_valor: -1

  }

  constructor(
    private formBuilder: FormBuilder,
    private multaService: MultaService) { }

  ngOnInit(): void {
    this.cargarMulta();

    this.form = this.formBuilder.group({
      txtmult_idmulta: [''],
      txtmult_nombre: [''],
      txtmult_valor: ['']

    })
  }

  //Cargar
  public cargarMulta() {
    this.multaService.getMulta().subscribe(
      (multa: any) => {
        this.multas = multa
        console.log(this.multas)
      }, (error) => console.log(error)
    )
  }

  //Crear
  public crearMulta() {

    this.multaService.postMulta({

      mult_idmulta: this.form.value.txtmult_idmulta,
      mult_nombre:this.form.value.txtmult_nombre,
      mult_valor:this.form.value.txtmult_valor

    }).subscribe(
      respuesta => {
        console.log('Multa creada correctamente');
        this.form.reset()
        this.cargarMulta();
      }
    )
  }
  //Recoleccion de datos para Actualizar
  public infoUpdateMulta(mult_idmulta:any, mult_nombre:any, mult_valor:any) {

      this.informacionMulta.mult_idmulta = mult_idmulta,
      this.informacionMulta.mult_nombre = mult_nombre,
      this.informacionMulta.mult_valor = mult_valor

  }

  public actualizarMulta(mult_idmulta: any) {
    console.log(mult_idmulta+"....");
    this.multaService.putUpdateMulta({

      mult_idmulta: this.form.value.txtmult_idmulta,
      mult_nombre:this.form.value.txtmult_nombre,
      mult_valor:this.form.value.txtmult_valor

    },mult_idmulta).subscribe(
      respuesta => {
        console.log('Multa actualizada correctamente');

        this.form.reset()
        this.cargarMulta()

      }
    )
  }

  //Eliminado Físico Persona
  public eliminarFisicoMulta(mult_idmulta: any) {

    this.multaService.deleteFisicoMulta(mult_idmulta).subscribe(
      respuesta => {
        console.log('Multa eliminada correctamente');
        console.log(mult_idmulta)
        this.cargarMulta()
      }
    )
  }

}
