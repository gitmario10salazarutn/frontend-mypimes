import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlicuotaService {

  constructor(private http: HttpClient) { }
  // get
 public getAlicuota() {//no hay parametro
  const url = `https://app-mariosalazar.herokuapp.com/get_alicuotas`
  console.log(this.http.get)
  console.log('holaaa...')
  return this.http.get(url)//get
}

//crear 
public postAlicuota(body: any) { // objeto de entrada
  const url = ` https://app-mariosalazar.herokuapp.com/create_alicuota`
  return this.http.post(url, body)//post
}

//actualizar 
public putUpdateAlicuota(body: any, ali_idalicuota: string) {
  const url = ` https://app-mariosalazar.herokuapp.com/update_alicuota/` + ali_idalicuota
  return this.http.put(url, body)
}
//borrado fisico
public deleteFisicoAlicuota(ali_idalicuota: any) {  //parametro de entrada
  const url = ` https://app-mariosalazar.herokuapp.com/delete_alicuota/ ` + ali_idalicuota
  return this.http.delete(url)//delete
}
}
