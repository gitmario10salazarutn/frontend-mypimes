import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor(private http: HttpClient) { }
  // get
 public getUsuarios() {//no hay parametro
  const url = `https://app-mariosalazar.herokuapp.com/get_usuarios`
  return this.http.get(url)//get
}

//crear
public postUsuario(body: any) { // objeto de entrada
  const url = ` https://app-mariosalazar.herokuapp.com/create_usuario`
  return this.http.post(url, body)//post
}

//actualizar
public putUpdateUsuario(body: any, id: string) {
  const url = ` https://app-mariosalazar.herokuapp.com/update_usuario/` + id
  return this.http.put(url, body)
}
//borrado fisico
public deleteFisicoUusario(id: any) {  //parametro de entrada
  const url = ` https://app-mariosalazar.herokuapp.com/delete_usuario/ ` + id
  return this.http.delete(url)//delete
}

public getUsuarioById(id: any) {  //parametro de entrada
  const url = ` https://app-mariosalazar.herokuapp.com/get_usuario_byid/ ` + id
  return this.http.get(url)//delete
}

public loginUsuario(usuario: any, password: any) {  //parametro de entrada
  const url = ` https://app-mariosalazar.herokuapp.com/login/ ` + usuario + `/` + password
  return this.http.get(url)//delete
}

}
