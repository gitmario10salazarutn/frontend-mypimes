import { Injectable } from '@angular/core';
//importar esta linea
import { HttpClient, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'

})


export class PersonaService {


  constructor(private http: HttpClient) { }

  //Mostrar personas
  public getPersona() {//no hay parametro
    const url = `https://app-mariosalazar.herokuapp.com/get_personas`
    return this.http.get(url)//get
  }
  //crear personas
  public postPersona(body: any) { // objeto de entrada
    const url = `https://app-mariosalazar.herokuapp.com/create_persona`
    return this.http.post(url, body)//post
  }

  //actualizar personas
  public putUpdatePersona(body: any, pers_personas: string) {

    console.log(pers_personas + "....1111");
    const url = `https://app-mariosalazar.herokuapp.com/update_persona/` + pers_personas
    return this.http.put(url, body)
  }
  //borrado fisico
  public deleteFisicoPersona(pers_persona: any) {  //parametro de entrada
    const url = `https://app-mariosalazar.herokuapp.com/delete_persona/` + pers_persona
    return this.http.delete(url)//delete
  }


}
