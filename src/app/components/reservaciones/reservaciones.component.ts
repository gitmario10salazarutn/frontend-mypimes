import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ErrorService } from 'src/app/services/error.service';
import { ReservacionesService } from 'src/app/services/reservaciones.service';
import { addReservacion, Reservaciones } from 'src/app/interfaces/reservacion';
import { detalleReservacion , adddetail} from 'src/app/interfaces/detalleReservaciones';
import { Time } from '@angular/common';





@Component({
  selector: 'app-reservaciones',
  templateUrl: './reservaciones.component.html',
  styleUrls: ['./reservaciones.component.css']
})
export class ReservacionesComponent implements OnInit {

  	detres_cabreservacion: number = 0;
		detres_cantidad: number = 0;
		detres_fecha: Date = new Date();
		detres_horafin: string = '' ;
		detres_horainicio: string = '';
		detres_iva: number = 0;
		detres_subtotal: number = 0;
		detres_total: number = 0;
		estado_delete_detres: string = '';
		reservacion: number = 0;
    detalle: detalleReservacion[] = [];
    reserv: Reservaciones[] = [];
    cantidad: number = 0
    hora_inicio: string = '';
    hora_fin: string = '';
    cabres_secretario: number = 4;
	  cabres_condomino: number = 3;

  constructor(private toastr: ToastrService,
    private reservService: ReservacionesService,
    private router: Router,
    private errorService: ErrorService

  ) { }

    ngOnInit(): void {
    }

    addDetail(){

      const det: adddetail = {
        reservacion: this.reservacion,
        cantidad: this.cantidad,
        hora_inicio: this.hora_inicio,
        hora_fin: this.hora_fin
      }

      console.log(det)
      console.log("Hi ")
      this.reservService.addDetails(det).subscribe({
      next: (value: any) => {
          this.detalle = value
          console.log("Hi Mari")
          console.log(this.detalle)
      },
    })
    }


    addReservacion(){

      const det: addReservacion = {
        cabres_secretario: this.cabres_secretario,
	      cabres_condomino: this.cabres_condomino
      }

      console.log(det)
      console.log("Hi ")
      this.reservService.addReservacion(det).subscribe({
      next: (value) => {
          this.reserv = value
          console.log("Hi Mari")
          console.log(this.reserv)
          this.detalle.forEach(element => {
            console.log(element)
          });
      },
    })
    }

}
