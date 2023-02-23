import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EgresosService {

  constructor(private http: HttpClient) { }

  // get
  public getEgresos() {
    const url = 'https://app-mariosalazar.herokuapp.com/get_egresos'
    return this.http.get(url)
  }

  //crear 
  public postEgresos(body: any){
    const url = `https://app-mariosalazar.herokuapp.com/create_egreso`
    return this.http.post(url, body)//post
  }
  
   //actualizar 
   public putUpdateEgreso(body: any, egre_idegreso: string) {
    const url = ` https://app-mariosalazar.herokuapp.com/update_egreso/` + egre_idegreso
    return this.http.put(url, body)
  }
  //borrado fisico
  public deleteFisicoEgreso(egre_idegreso: any) {  //parametro de entrada
    const url = ` https://app-mariosalazar.herokuapp.com/delete_egreso/ ` + egre_idegreso
    return this.http.delete(url)//delete
  }
}

