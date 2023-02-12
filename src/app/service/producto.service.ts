import { Injectable } from '@angular/core';
//importar esta linea
import { HttpClient,HttpHandler } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }

  public getProducto() {//no hay parametro 
    const url = `https://api-modulo-inventario.herokuapp.com/productos`
    return this.http.get(url)//get
  }
}
