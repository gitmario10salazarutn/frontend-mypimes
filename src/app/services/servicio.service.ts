import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http: HttpClient) { }
    // get
   public getServicio() {//no hay parametro
    const url = `https://app-mariosalazar.herokuapp.com/get_servicios`
    return this.http.get(url)//get
  }

  //crear 
  public postServicio(body: any) { // objeto de entrada
    const url = ` https://app-mariosalazar.herokuapp.com/create_servicios`
    return this.http.post(url, body)//post
  }

  //actualizar 
  public putUpdateServicio(body: any, serv_idservicios: string) {
    const url = ` https://app-mariosalazar.herokuapp.com/update_servicios/` + serv_idservicios
    return this.http.put(url, body)
  }
  //borrado fisico
  public deleteFisicoServicio(serv_idservicios: any) {  //parametro de entrada
    const url = ` https://app-mariosalazar.herokuapp.com/delete_servicios/ ` + serv_idservicios
    return this.http.delete(url)//delete
  }
}
