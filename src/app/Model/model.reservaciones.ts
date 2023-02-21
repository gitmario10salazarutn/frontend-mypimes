export interface ModelReservaciones{
  
  resv_idreservacion: number,
  resv_fecha: Date, 
  resv_descripcion: string,
  servicios:{
  serv_idservicios: number,
  serv_cantidad: number,
  serv_descripcion:string,
  serv_iva: number,
  serv_nombreservicio: string,
  serv_valor: number
  tipo_servicio:{
  tipserv_id: number,
  tipserv_nombre:string
  }
  }
 
}