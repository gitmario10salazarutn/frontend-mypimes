import { Injectable } from '@angular/core';
//importar lo siguiente
import { HttpClient, HttpHeaders } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  constructor(private http: HttpClient) { }

  public getProveedor() {//no hay parametro 
    const url = ` https://modelo-223.herokuapp.com/proveedor`
    return this.http.get(url)//get
  }
  public getProveedorActivos() {//no hay parametro 
    const url = ` https://modelo-223.herokuapp.com/proveedorActivos`
    return this.http.get(url)//get
  }
  public getProveedorInactivos() {//no hay parametro 
    const url = ` https://modelo-223.herokuapp.com/proveedorInactivo`
    return this.http.get(url)//get
  }
  public getProveedorByName(name:any) {//no hay parametro 
    const url = `https://modelo-223.herokuapp.com/proveedor/`+name
    return this.http.get(url)//get
  }
  public postProveedor(body:any){ // objeto de entrada
    const url= ` https://modelo-223.herokuapp.com/proveedor`
    return this.http.post(url,body)//post
  }
  public putUpdateProveedor(body:any){
    const url= ` https://modelo-223.herokuapp.com/proveedor`
    return this.http.put(url,body)
  }
  public deleteProveedor(body:any){ //parametro de entrada
    const url = ` https://modelo-223.herokuapp.com/Eliminarproveedor`
    return this.http.put(url,body)//delete
  }
  public deleteFisicoProveedor(name:any){ //parametro de entrada
    const url = ` https://modelo-223.herokuapp.com/proveedor/`+name
    return this.http.delete(url)//delete
  } 
}
