import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User, UserCreate , getUser} from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private myAppUrl: string;
  private myApiUrl: string;
  private myApiUrlc: string;
  private myApiUrlg: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/users'
    this.myApiUrlc = 'create_usuario'
    this.myApiUrlg = 'get_usuarios'
   }

   signIn(user: UserCreate): Observable<any> {
    return this.http.post(`${this.myAppUrl}${this.myApiUrlc}`, user);
   }

   login(user: User): Observable<string> {
    return this.http.post<string>(`${this.myAppUrl}${this.myApiUrl}/login`, user)
   }

   getUser(): Observable<string> {
    return this.http.get<string>(`${this.myAppUrl}${this.myApiUrlg}`)
   }
}
