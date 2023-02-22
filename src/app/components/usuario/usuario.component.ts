import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User, UserCreate , getUser} from 'src/app/interfaces/user';
import { ErrorService } from 'src/app/services/error.service';
import { UserService } from 'src/app/services/user.service';

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
  users: getUser[] = []

constructor(private toastr: ToastrService,
    private userService: UserService,
    private router: Router,
    private errorService: ErrorService) { }

  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
    this.getUsers()
  }

  getEnable(value: number){
    if (value == 0){
      return "Active"
    }
    else{
      return "Inactive"
    }
  }

    getStatus(value: number){
    if (value == 0){
      return "status text-success"
    }
    else{
      return "status text-danger"
    }
  }


  getUsers(){
    this.userService.getUser().subscribe({
      next: (value: any) => {
          this.users = value
          console.log(this.users)
      },
    })
  }

}
