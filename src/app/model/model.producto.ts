export interface ModelProducto{

        pro_id:Number,
        pro_nombre:String,
        pro_descripcion:String,
        pro_iva: Boolean,
        pro_costo: Number,
        pro_pvp: Number,
        pro_imagen: String,
        pro_stock: Number,
        pro_categoria: {
        cat_id: Number,
        cat_nombre: String
        
    }

}



