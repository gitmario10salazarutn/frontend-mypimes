import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { detalleReservacion, adddetail } from '../interfaces/detalleReservaciones';
import { addReservacion } from '../interfaces/reservacion';

@Injectable({
  providedIn: 'root'
})
export class ReservacionesService {

  private myAppUrl: string;
  private myApiUrl: string;
  private myApiUrl1: string;
  private myApiUrlremove: string;
  private myApiUrlvalues: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'add_detalle_reservaciones'
    this.myApiUrl1 = 'generar_reservacion'
    this.myApiUrlremove = 'remove_item/'
    this.myApiUrlvalues = 'get_values'

  }

  addDetails(det: adddetail): Observable<any> {
    return this.http.post<any>(`${this.myAppUrl}${this.myApiUrl}`, det)
   }

   addReservacion(det: addReservacion): Observable<any> {
    return this.http.post<any>(`${this.myAppUrl}${this.myApiUrl1}`, det)
   }

   removeItem(index: number): Observable<any>{
    return this.http.get<any>(`${this.myAppUrl}${this.myApiUrlremove}${index}`,)
   }

}
