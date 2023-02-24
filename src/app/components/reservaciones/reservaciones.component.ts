import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ErrorService } from 'src/app/services/error.service';
import { ReservacionesService } from 'src/app/services/reservaciones.service';
import { addReservacion, Reservaciones, getValues } from 'src/app/interfaces/reservacion';
import { detalleReservacion , adddetail} from 'src/app/interfaces/detalleReservaciones';
import { Time } from '@angular/common';





@Component({
  selector: 'app-reservaciones',
  templateUrl: './reservaciones.component.html',
  styleUrls: ['./reservaciones.component.css']
})
export class ReservacionesComponent implements OnInit {

  	detres_cabreservacion: number = 0;
		detres_cantidad: number = 1;
		detres_fecha: Date = new Date();
		detres_horafin: string = '10:00' ;
		detres_horainicio: string = '11:00';
		detres_iva: number = 0;
		detres_subtotal: number = 0;
		detres_total: number = 0;
		estado_delete_detres: string = '';
		reservacion: number = 10;
    detalleValues: detalleReservacion[] = [];
    detalle_res: detalleReservacion[] = [];
    reserv: Reservaciones[] = [];
    cantidad: number = 0
    hora_inicio: string = '';
    hora_fin: string = '';
    cabres_secretario: number = 4;
	  cabres_condomino: number = 3;
    values: getValues = {
      detres_subtotal: 0,
      detres_iva: 0,
      detres_total: 0
    };

  constructor(private toastr: ToastrService,
    private reservService: ReservacionesService,
    private router: Router,
    private errorService: ErrorService
  ) { }

    ngOnInit(): void {
    }


    getValues(lista: detalleReservacion[]){
      lista.forEach(element => {
        this.values.detres_subtotal += element.detres_subtotal
        this.values.detres_iva += element.detres_iva
        this.values.detres_total += element.detres_total
      });
    }

    addDetail(){


      const det: adddetail = {
        reservacion: this.reservacion,
        hora_inicio: this.hora_inicio,
        hora_fin: this.hora_fin,
        detres_fecha: this.detres_fecha
      }

      console.log(det)

      this.reservService.addDetails(det).subscribe({
      next: (value: any) => {
        console.log('Hi Mario')
          this.detalleValues = []
          this.detalle_res.push(value)
          this.detalleValues.push(value)
          console.log(this.detalle_res)
          this.getValues(this.detalleValues)
      },
    })

    }

    removeDetail(index:number){
      this.detalle_res.splice(index, 1)
      this.values.detres_iva = this.values.detres_subtotal = this.values.detres_total = 0
      this.getValues(this.detalle_res)
    }

    addReservacion(){
      const det: addReservacion = {
        cabres_secretario: this.cabres_secretario,
	      cabres_condomino: this.cabres_condomino,
        detalle: this.detalle_res
      }

      console.log(det)
      this.reservService.addReservacion(det).subscribe(
        r => {

        console.log('HERER')
          console.log(r)
          this.reserv.push(r)
          this.detalle_res = []
          this.detalleValues = []
          console.log('Reservacion fue creada!')
        }
      )
    }

/*
    addReservacion(){
      const det: addReservacion = {
        cabres_secretario: this.cabres_secretario,
	      cabres_condomino: this.cabres_condomino,
        detalle: this.detalle_res
      }

      console.log(det)
      this.reservService.addReservacion({
        cabres_secretario: this.cabres_secretario,
	      cabres_condomino: this.cabres_condomino,
        detalle: this.detalle_res
      }).subscribe(
        r => {

        console.log('HERER')
          console.log(r)
          console.log('Reservacion fue creada!')
        }
      )
    }
*/
}
