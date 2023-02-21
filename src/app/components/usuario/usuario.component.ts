import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';
import { FormBuilder, FormGroup , Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})

export class UsuarioComponent implements OnInit {

  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  loading: boolean = false;

  public myForm!:FormGroup;
    constructor(
    private fb: FormBuilder,
    private personaService: PersonaService
  ) { }

  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
    console.log("se encuentra2");
    this.myForm = this.createMyForm();
  }


  handleCredentialResponse(response:any){
    console.log(response);
    if(response.credential){
      sessionStorage.setItem("token",response.credential);
      document.location.href = "";
    }
  }

  private createMyForm():FormGroup{
    return this.fb.group({
      usuario:[''],
      password:['']
    });
  }

  public submitFormulario(){
    console.log(this.myForm.value)
    console.log('Hi marii')
    if(this.myForm.invalid){
        Object.values(this.myForm.controls).forEach(control=>{
          control.markAllAsTouched();
        });
        return;
    }
  }

  public get f():any{
    return this.myForm.controls;
  }

}
