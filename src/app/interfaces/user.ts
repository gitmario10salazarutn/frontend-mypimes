export interface User {
  username: string,
  password: string,
}

export interface UserCreate {
  rol_idrol: number,
	pers_persona: string,
	pers_email: string,
	pers_nombres: string,
	pers_apellidos: string,
	pers_telefono: string,
	pers_direccion: string,
	user_password: string
}

export interface getUser
	{
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
			rol_nombrerol: number
		},
		user_estado: number,
		user_fecha: Date,
		user_idusuario: string,
		user_password: string
	}
