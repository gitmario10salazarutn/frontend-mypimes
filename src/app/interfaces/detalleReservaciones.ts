import { Time } from "@angular/common"

export interface detalleReservacion
	{
		detres_cabreservacion: number,
		detres_cantidad: number,
		detres_fecha: string,
		detres_horafin: string,
		detres_horainicio: string,
		detres_iva: number,
		detres_subtotal: number,
		detres_total: number,
		estado_delete_detres: string,
		reservacion: number,
    servicio: string
	}

  export interface adddetail
  {
    reservacion: number,
    hora_inicio: string,
    hora_fin: string
    detres_fecha: Date
 }
