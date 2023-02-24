import { Time } from "@angular/common"
import { detalleReservacion } from "./detalleReservaciones"

export interface Reservaciones

	{
		cabecera_reservacion: {
			cabres_condomino: {
				cond_idcondomino: Number,
				usuario: {
					persona: {
						pers_apellidos: String,
						pers_direccion: String,
						pers_email: String,
						pers_nombres: String,
						pers_persona: String,
						pers_telefono: String
					},
					rol_usuario: {
					    rol_idrol: Number,
						rol_nombrerol: String
					},
					user_estado: Number,
					user_fecha: Date,
					user_idusuario: String,
					user_password: String
				}
			},
			cabres_fecha: Date,
			cabres_iva: String,
			cabres_numero: String,
			cabres_secretario: {
				sec_idsecretario: Number,
				usuario: {
					persona: {
						pers_apellidos: String,
						pers_direccion: String,
						pers_email:String,
						pers_nombres: String,
						pers_persona: String,
						pers_telefono: String
					},
					rol_usuario: {
						rol_idrol: Number,
						rol_nombrerol: String
					},
					user_estado: Number,
					user_fecha: Date,
					user_idusuario: String,
					user_password: String
				}
			},
			cabres_subtotal: Number,
			cabres_total:Number,
			id_cabreservacion: Number
		},
		detres_cantidad: Number,
		detres_fecha: Date,
		detres_horafin: Time,
		detres_horainicio: Time,
		detres_iddetalle: Number,
		detres_iva: Number,
		detres_subtotal: Number,
		detres_total: Number,
		estado_delete: Boolean,
		reservacion: {
			estado_delete: Boolean,
			resv_descripcion: String,
			resv_fecha: Date,
			resv_idreservacion: Number,
			servicios: {
				serv_cantidad: Number,
				serv_descripcion: String,
				serv_idservicios: Number,
				serv_iva: Number,
				serv_nombreservicio: String,
				serv_valor: Number,
				tipo_servicio: {
					tipserv_id: Number,
					tipserv_nombre: String
				}
			}
		}
	}

  export interface addReservacion {
    cabres_secretario: number,
	  cabres_condomino: number,
    detalle: detalleReservacion[]
  }

  export interface getValues
  {
	"iva": number,
	"subtotal": number,
	"total": number
}
