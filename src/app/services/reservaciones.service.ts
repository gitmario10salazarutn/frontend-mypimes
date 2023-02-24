import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { detalleReservacion, adddetail } from '../interfaces/detalleReservaciones';
import { addReservacion, Reservaciones } from '../interfaces/reservacion';

@Injectable({
  providedIn: 'root'
})
export class ReservacionesService {

  private myAppUrl: string;
  private myApiUrl: string;
  private myApiUrl1: string;
  private myApiUrlremove: string;
  private myApiUrlvalues: string;
  private myApiUrlres: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'add_detalle_reservaciones'
    this.myApiUrl1 = 'generar_reservacion'
    this.myApiUrlremove = 'remove_item/'
    this.myApiUrlvalues = 'get_values'
    this.myApiUrlres = 'get_detalle_reservaciones_byidsimple'


  }

  addDetails(det: adddetail): Observable<detalleReservacion> {
    return this.http.post<detalleReservacion>(`${this.myAppUrl}${this.myApiUrl}`, det)
   }

   addReservacion(det: addReservacion): Observable<Reservaciones> {
    return this.http.post<Reservaciones>(`${this.myAppUrl}${this.myApiUrl1}`, det)
   }
/*
  getDetalles(id: number): Observable<addReservacion[]> {
    return this.http.get<addReservacion[]>(`${this.myAppUrl}${this.myApiUrlres}/`+id)
   }
   */

     public getDetalles(mult_idmulta: any) {  //parametro de entrada
    const url = ` https://app-mariosalazar.herokuapp.com/get_detalle_reservaciones_byidsimple/` + mult_idmulta
    return this.http.get<addReservacion[]>(url)//delete
  }




/*
    public addReservacion(det: addReservacion) {
    const url = `https://app-mariosalazar.herokuapp.com/generar_reservacion`
    return this.http.post(url, det)
  }
*/
}
