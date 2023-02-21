export interface ModelAlicuota{


    ali_idalicuota: number,
    ali_valor_anterior: number,
    ali_valor_actual: number,
    ali_fecha_actualizacion: Date,
    estado_delete_alicuota: boolean,
    multa:{
        mult_idmulta:number,
        mult_nombre: string,
        mult_valor: number
    }

}
