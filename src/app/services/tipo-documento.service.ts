import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TipoDocumentoService {
  // get
  constructor(private http: HttpClient) { }

     public getTipoDocumentos() {//no hay parametro
      const url = `https://app-mariosalazar.herokuapp.com/get_tipoDocumentos`
      return this.http.get(url)//get
    }

    //crear 
    public postTipoDocumento(body: any) { // objeto de entrada
      const url = ` https://app-mariosalazar.herokuapp.com/create_tipoDocumentos`
      return this.http.post(url, body)//post
    }
  
    //actualizar 
    public putUpdateTipoDocumento(body: any, tipdoc_id: string) {
      const url = `https://app-mariosalazar.herokuapp.com/update_tipoDocumentos/` + tipdoc_id
      return this.http.put(url, body)
    }
    //borrado fisico
    public deleteFisicoTipoDocumento(tipdoc_id: any) {  //parametro de entrada
      const url = ` https://app-mariosalazar.herokuapp.com/delete_tipoDocumentos/` + tipdoc_id
      return this.http.delete(url)//delete
    }



}
