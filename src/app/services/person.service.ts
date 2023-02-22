import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ModelPersona } from '../interfaces/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonService
{

  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'create_persona'
   }

   createPersona(user: ModelPersona): Observable<string> {
    return this.http.post<string>(`${this.myAppUrl}${this.myApiUrl}`, user)
   }

}
