import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MultaService {

  constructor(private http: HttpClient) { }
  // public getMulta(){
  //   const url= `http://127.0.0.1:5000/get_multas`
  //   return this.http.get(url)
  // }
  
  // public postCreateMulta(body:any){
  //   const url= `http://127.0.0.1:5000/create_multas`
  //   return this.http.post(url,body)
  // }

  // public putUpdateMulta(body:any){
  //   const url= `http://127.0.0.1:5000/update_multas`
  //   return this.http.put(url,body)
  // }

  // public deleteMulta(mult_idmulta:any){
  //   const url= `http://127.0.0.1:5000/delete_multas/${mult_idmulta}`
  //   return this.http.delete(url)
  // }


   //Mostrar multa
   public getMulta() {//no hay parametro
    const url = `https://app-mariosalazar.herokuapp.com/get_multas`
    return this.http.get(url)//get
  }
  //crear multa
  public postMulta(body: any) { // objeto de entrada
    const url = ` https://app-mariosalazar.herokuapp.com/create_multas`
    return this.http.post(url, body)//post
  }

  //actualizar multa
  public putUpdateMulta(body: any, mult_idmulta: string) {
    const url = `https://app-mariosalazar.herokuapp.com/update_multas/` + mult_idmulta
    return this.http.put(url, body)
  }
  //borrado fisico
  public deleteFisicoMulta(mult_idmulta: any) {  //parametro de entrada
    const url = ` https://app-mariosalazar.herokuapp.com/delete_multas/` + mult_idmulta
    return this.http.delete(url)//delete
  }

  
}
