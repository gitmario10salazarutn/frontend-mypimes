import { Component, OnInit } from '@angular/core';
import { ModelPersona } from 'src/app/Model/model.persona';
import { PersonaService } from 'src/app/services/persona.service';
//Importamos form... para recoger los datos de html
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  public personas: ModelPersona[] = []
  public form!: FormGroup;
  /*
    pers_persona: string,
    pers_email: string,
    pers_nombres: string,
    pers_apellidos: string,
    pers_telefono: string,
    pers_direccion: string
    */

  //Información de la Persona
  public informacionPersona = {
    pers_persona: "",
    pers_email: "",
    pers_nombres: "",
    pers_apellidos: "",
    pers_telefono: "",
    pers_direccion: ""

  }

  constructor(
    private formBuilder: FormBuilder,
    private personaService: PersonaService
  ) { }

  ngOnInit(): void {
    this.cargarPersona();

    this.form = this.formBuilder.group({

      txtpers_persona: [''],
      txtpers_email: [''],
      txtpers_nombres: [''],
      txtpers_apellidos: [''],
      txtpers_telefono: [''],
      txtpers_direccion: ['']

    })
  }

  //Cargar Persona
  public cargarPersona() {
    this.personaService.getPersona().subscribe(
      (persona: any) => {
        this.personas = persona
        console.log(this.personas)
      }, (error) => console.log(error)
    )
  }

  //Crear Persona
  public crearPersona() {

    this.personaService.postPersona({

      pers_persona: this.form.value.txtpers_persona,
      pers_email: this.form.value.txtpers_email,
      pers_nombres: this.form.value.txtpers_nombres,
      pers_apellidos: this.form.value.txtpers_apellidos,
      pers_telefono: this.form.value.txtpers_telefono,
      pers_direccion: this.form.value.txtpers_direccion

    }).subscribe(
      respuesta => {
        console.log('Hi Mario')
        console.log(this.form.value)
        console.log('Hi marii')
        console.log('Persona creada correctamente');
        this.form.reset()
        this.cargarPersona();
      }
    )
  }
  //Recoleccion de datos para Actualizar persona
  public infoUpdatePersona(pers_persona: any, pers_email: any, pers_nombres: any,
    pers_apellidos: any, pers_telefono: any, pers_direccion: any) {

      this.informacionPersona.pers_persona = pers_persona,
      this.informacionPersona.pers_email = pers_email,
      this.informacionPersona.pers_nombres = pers_nombres,
      this.informacionPersona.pers_apellidos = pers_apellidos,
      this.informacionPersona.pers_telefono = pers_telefono,
      this.informacionPersona.pers_direccion = pers_direccion
  }
//Actualizar Persona
  public actualizarPersona(pers_persona: string) {
    console.log(pers_persona+"....");
    this.personaService.putUpdatePersona({
      pers_persona: this.form.value.txtpers_persona,
      pers_email: this.form.value.txtpers_email,
      pers_nombres: this.form.value.txtpers_nombres,
      pers_apellidos: this.form.value.txtpers_apellidos,
      pers_telefono: this.form.value.txtpers_telefono,
      pers_direccion: this.form.value.txtpers_direccion

    },pers_persona).subscribe(
      respuesta => {
        console.log('Persona actualizada correctamente');

        this.form.reset()
        this.cargarPersona()

      }
    )
  }

  //Eliminado Físico Persona
  public eliminarFisicoPersona(pers_persona: string) {

    this.personaService.deleteFisicoPersona(pers_persona).subscribe(
      respuesta => {
        console.log('Persona eliminada correctamente');
        console.log(pers_persona)
        this.cargarPersona()
      }
    )
  }
}
