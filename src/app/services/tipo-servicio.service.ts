import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class TipoServicioService {

   
   constructor(private http: HttpClient) { }
    // get
   public getTipoServicio() {//no hay parametro
    const url = `https://app-mariosalazar.herokuapp.com/get_tipo_servicios`
    return this.http.get(url)//get
  }

  //crear 
  public postTipoServicio(body: any) { // objeto de entrada
    const url = ` https://app-mariosalazar.herokuapp.com/create_tipo_servicios`
    return this.http.post(url, body)//post
  }

  //actualizar 
  public putUpdateTipoServicio(body: any, tipserv_id: string) {
    const url = ` https://app-mariosalazar.herokuapp.com/update_tipo_servicio/` + tipserv_id
    return this.http.put(url, body)
  }
  //borrado fisico
  public deleteFisicoTipoServicio(tipserv_id: any) {  //parametro de entrada
    const url = ` https://app-mariosalazar.herokuapp.com/delete_tipo_servicio/ ` + tipserv_id
    return this.http.delete(url)//delete
  }


}
