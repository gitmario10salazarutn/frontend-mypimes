export interface ModelServicio
{
    serv_idservicios: number,
    serv_nombreservicio: string,
    serv_descripcion: string,
    serv_valor: number,
    serv_iva: number,
    serv_cantidad: number,
    estado_delete_serv:boolean,
    tipo_servicio:{
     tipserv_id:number,
      tipserv_nombre: string

    }

    
   
}