import { Time } from "@angular/common"
import { detalleReservacion } from "./detalleReservaciones"

export interface Reservaciones
  {
	cabres_condomino: {
		cond_idcondomino: number,
		usuario: {
			persona: {
				pers_apellidos: string,
				pers_direccion: string,
				pers_email: string,
				pers_nombres: string,
				pers_persona: string,
				pers_telefono: string
			},
			rol_usuario: {
				rol_idrol: number,
				rol_nombrerol: string
			},
			user_estado: number,
			user_fecha: Date,
			user_idusuario: string,
			user_password: string
		}
	},
	cabres_fecha: Date,
	cabres_iva: number,
	cabres_numero: number,
	cabres_secretario: {
		sec_idsecretario: number,
		usuario: {
			persona: {
				pers_apellidos: string,
				pers_direccion: string,
				pers_email: string,
				pers_nombres: string,
				pers_persona: string,
				pers_telefono: string
			},
			rol_usuario: {
				rol_idrol: number,
				rol_nombrerol: string
			},
			user_estado: number,
			user_fecha: Date,
			user_idusuario: string,
			user_password: string
		}
	},
	cabres_subtotal: number,
	cabres_total: number,
	id_cabreservacion: number
}

  export interface addReservacion {
    cabres_secretario: number,
	  cabres_condomino: number,
    detalle: detalleReservacion[]
  }

  export interface getValues
  {
	"detres_iva": number,
	"detres_subtotal": number,
	"detres_total": number
}
