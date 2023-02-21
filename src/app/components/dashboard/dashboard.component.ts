import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
import { ModelPersona } from 'src/app/Model/model.persona';
import { PersonaService } from 'src/app/services/persona.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  listProduct: ModelPersona[] = []
   public form!: FormGroup;

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
    private personaService: ProductService
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
        this.listProduct = persona
        console.log(this.listProduct)
      }, (error) => console.log(error)
    )
  }


}
