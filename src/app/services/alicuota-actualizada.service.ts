import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class AlicuotaActualizadaService {


  constructor(private http: HttpClient) { }
  // get
 public getaliActualizada() {//no hay parametro
  const url = `https://app-mariosalazar.herokuapp.com/get_alicuotaActualizadas`
  return this.http.get(url)//get
}

//crear 
public postaliActualizada(body: any) { // objeto de entrada
  const url = ` https://app-mariosalazar.herokuapp.com/create_alicuotaActualizada`
  return this.http.post(url, body)//post
}

//actualizar 
public putUpdatealiActualizada(body: any, alic_id: string) {
  const url = ` https://app-mariosalazar.herokuapp.com/update_alicuotaActualizada/` + alic_id
  return this.http.put(url, body)
}
//borrado fisico
public deleteFisicoaliActualizada(alic_id: any) {  //parametro de entrada
  const url = ` https://app-mariosalazar.herokuapp.com/delete_alicuotaActualizada/ ` + alic_id
  return this.http.delete(url)//delete
}






}
