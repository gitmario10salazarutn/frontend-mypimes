import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReservacionesService {
  constructor(private http: HttpClient) { }
  // get
 public getReservaciones() {//no hay parametro
  const url = `https://app-mariosalazar.herokuapp.com/get_reservaciones`
  return this.http.get(url)//get
}

//crear 
public postcreateReservaciones(body: any) { // objeto de entrada
  const url = ` https://app-mariosalazar.herokuapp.com/create_reservaciones`
  return this.http.post(url, body)//post
}

//actualizar 
public putUpdateReservaciones(body: any, resv_idreservacion: string) {
  const url = ` https://app-mariosalazar.herokuapp.com/update_reservaciones/` + resv_idreservacion
  return this.http.put(url, body)
}
//borrado fisico
public deleteFisicoReservaciones(resv_idreservacion: any) {  //parametro de entrada
  const url = ` https://app-mariosalazar.herokuapp.com/delete_reservaciones/ ` + resv_idreservacion
  return this.http.delete(url)//delete
}


}
