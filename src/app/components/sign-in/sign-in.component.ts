import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User, UserCreate } from 'src/app/interfaces/user';
import { ErrorService } from 'src/app/services/error.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  loading: boolean = false;
  rol_idrol: number = 4;
	pers_persona: string = '';
	pers_email: string = '';
	pers_nombres: string = '';
	pers_apellidos: string = '';
	pers_telefono: string = '';
	pers_direccion: string = '';
	user_password: string = '';

  constructor(private toastr: ToastrService,
    private _userService: UserService,
    private router: Router,
    private _errorService: ErrorService) { }

  ngOnInit(): void {
  }

  addUser() {

    // Validamos que el usuario ingrese valores

    // Validamos que las password sean iguales
    if (this.user_password != this.confirmPassword) {
      this.toastr.error('Las passwords ingresadas son distintas', 'Error');
      return;
    }

    // Creamos el objeto
    const user: UserCreate = {
      rol_idrol: this.rol_idrol,
      pers_persona: this.pers_persona,
      pers_email:  this.pers_email,
      pers_nombres: this.pers_nombres,
      pers_apellidos: this.pers_apellidos,
      pers_telefono: this.pers_telefono,
      pers_direccion: this.pers_direccion,
      user_password: this.user_password
    }
    console.log(user)
    this.loading = true;
    this._userService.signIn(user).subscribe({
      next: (v) => {
        this.loading = false;
        console.log(v)
        this.toastr.success(`El usuario ${this.username} fue registrado con exito`, 'Usuario registrado');
        this.router.navigate(['/login']);
      },
      error: (e: HttpErrorResponse) => {
        this.loading = false;
        this._errorService.msjError(e);
      }
    })
  }
}
