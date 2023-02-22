import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ModelPersona } from 'src/app/Model/model.persona';
import { PersonService } from 'src/app/services/person.service';
import { Router } from '@angular/router';
import { ErrorService } from 'src/app/services/error.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-crearpersona',
  templateUrl: './crearpersona.component.html',
  styleUrls: ['./crearpersona.component.css']
})
export class CrearpersonaComponent implements OnInit {

    pers_persona: string = '';
    pers_email: string = '';
    pers_nombres: string = '';
    pers_apellidos: string = '';
    pers_telefono: string = '';
    pers_direccion: string = '';
    loading: boolean = false;

  constructor(private toastr: ToastrService,
    private personaService: PersonService,
    private router: Router,
    private _errorService: ErrorService
  ) { }


  ngOnInit(): void {  }

  createPerson(){

   
    const person: ModelPersona = {
    pers_persona: this.pers_persona,
    pers_email: this.pers_email,
    pers_nombres: this.pers_nombres,
    pers_apellidos: this.pers_apellidos,
    pers_telefono: this.pers_telefono,
    pers_direccion: this.pers_direccion
    }
    console.log(person)
    this.personaService.createPersona(person).subscribe({
      next: (value) => {
          console.log(value)
          this.router.navigate(['/persona'])
      },
      error: (e: HttpErrorResponse) => {
        this._errorService.msjError(e);
        this.loading = false
      }
    })
  }

  }


