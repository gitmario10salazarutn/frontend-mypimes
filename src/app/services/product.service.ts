import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PersonaComponent } from '../components/persona/persona.component';
import { Product } from '../interfaces/product';
import { ModelPersona } from '../Model/model.persona';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'get_personas'
  }

  getProducts(): Observable<ModelPersona[]> {
    /*  const token = localStorage.getItem('token')
     const headers = new HttpHeaders().set('Authorization',`Bearer ${token}`) */
    /*     return this.http.get<Product[]>(`${this.myAppUrl}${this.myApiUrl}`, { headers: headers } ) */

    return this.http.get<ModelPersona[]>(`${this.myAppUrl}${this.myApiUrl}`)
  }
    public getPersona() {//no hay parametro
    const url = `https://app-mariosalazar.herokuapp.com/get_personas`
    return this.http.get(url)//get
  }
}
