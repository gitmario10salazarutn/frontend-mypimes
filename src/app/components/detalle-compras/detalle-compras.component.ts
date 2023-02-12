import { Component, OnInit } from '@angular/core';
//Importamos form... para recoger los datos de html
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//Importamos los CabeceraService-->fac_compras para manipular metodos
import { FacComprasService } from 'src/app/service/fac-compras.service';

//ADICIONAL 
// importar el roter para los datos extraidos de otro html
import { ActivatedRoute } from '@angular/router';
//Importamos ModelProducto-->ModelProducto para almacenar datos
//pendiente importacion
//importamos ModelDetalle-->ModelDetalle_compras para almacenar datos  de los producto escogidos
import { ModelDetalle_compras } from 'src/app/model/model.detalle_compras';
//importamos DetalleService-->Detalle_comprasService para manipular los metodos
import { ProductoService } from 'src/app/service/producto.service';
import { ModelProducto } from 'src/app/model/model.producto';
import { DetalleComprasService } from 'src/app/service/detalle-compras.service';
import { ModelFac_compras } from 'src/app/model/model.fac_compras';
import { DatePipe } from '@angular/common';
import { ProveedorService } from 'src/app/service/proveedor.service';
//Importamos ModelObjCab --> ModelProveedor para almacenar datis para el objeto cabecera
import { ModelProveedor } from 'src/app/model/model.proveedor';


@Component({
  selector: 'app-detalle-compras',
  templateUrl: './detalle-compras.component.html',
  styleUrls: ['./detalle-compras.component.css']
})
export class DetalleComprasComponent implements OnInit {

  //****inializamos las importaciones realizadas menos el model
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private ProductoService: ProductoService,
    private proveedorService: ProveedorService,
    private Fac_comprasService: FacComprasService,
    private Detalle_comprasService: DetalleComprasService,
    //private marcaService: MarcaService
  ) { }
  //****fin  */
  //---Crear variable ModelCabecera para almacenar datos
  Productos: ModelProducto[] = []
  public form!: FormGroup;
  proveedors: ModelProveedor[] = []
  proveedorss: ModelProveedor[] = []
  proveedorId: ModelProveedor[] = []
  Detalle_comprass: ModelDetalle_compras[] = []
  //marcas:ModelMarca[]=[]
  //Variables entrantes temporales

  public informacionProveedor = {
    pro_cedula_ruc: "",
    pro_nombre: "",
    pro_direccion: "",
    pro_ciudad: "",
    pro_telefono: "",
    pro_correo: "",
    pro_credito_contado: "",
  }
  //Iniciacion de variables de Producto
  public informacionProducto = {
    pro_id: 0,
    pro_nombre: "",
    pro_descripcion: "",
    pro_iva: "",
    pro_costo: 0,
    pro_pvp: 0,
    pro_imagen: "",
    pro_stock: 0,
    pro_categoria: {
      cat_id: 0,
      cat_nombre: ""

    }

  }
  public fcom_id_final!: String;
  public verificar = true;


  //variables temporales propias
  Producto: any
  Proveedor: any
  today: Date = new Date();
  pipe = new DatePipe('en-US');
  fecha: any;
  Detalle_compras: any
  public txtTotal: number = 0;
  public cantidad: number = 1;
  public txtVuelto: number = 0;
  public pro_ToF = false;
  public FechaVencimiento: any;

  //______Inicalizar datos para html_______________//
  ngOnInit(): void {
    this.fecha = this.pipe.transform(Date.now(), 'yyyy-MM-dd');
    this.cargarProducto();
    this.cargarProveedor();
    this.cargarProveedorActivos();
    //parametros de entrada
    this.route.params.subscribe(
      params => {
        this.fcom_id_final = params['fcom_id_final'];
        console.log(this.fcom_id_final);

      }
    )
    //datos recogios del html
    this.form = this.formBuilder.group({
      ProveedorSelected: [null, [Validators.required]],
      ProductoSelected: [null, [Validators.required]],
      txtcantidad: ['', [Validators.required]],
      txtpro_cedula_ruc: [''],
      txtpro_nombre: [''],
      txtpro_direccion: [''],
      txtpro_ciudad: [''],
      txtpro_telefono: [''],
      txtpro_correo: [''],
      txtpro_credito_contado: [''],
      txtpro_credito: [''],
      txtfecha: [''],
      txtTotal: [''],
      txtPago: [''],
      txtVuelto: [''],
      txtSaldo: [''],
      txtfcom_fechaven: [''],
      //variables de entrada de para factura
      txtfcom_fechavencimiento: [''],

      //variables de entrada de productos
      txtpro_descripcion: [''],
      txtpro_iva: [''],
      txtpro_costo: [''],
      txtpro_pvp: [''],
      txtpro_imagen: [''],
      txtpro_stock: [''],
      txtpro_categoria: {
        txtcat_id: [''],
        txtcat_nombre: ['']
      }

    })

    //form... del html
  }
  //______________FIN_____________
  //°°°°°°°°°°°°| Crear Metodos de Detalle|°°°°°°°
  public cargarProducto() {
    this.ProductoService.getProducto().subscribe( //------------------cambiar
      (Producto: any) => {
        this.Productos = Producto
        console.log(this.Productos);
      }, (error) => console.log(error)
    )
  }
  //cargar Proveedor
  public cargarProveedor() {
    this.proveedorService.getProveedor().subscribe(
      (proveedor: any) => {
        this.proveedors = proveedor
        console.log(this.proveedors)
      }, (error) => console.log(error)
    )
  }
  //cargar Proveedor
  public cargarProveedorActivos() {
    this.proveedorService.getProveedorActivos().subscribe(
      (proveedor: any) => {
        this.proveedorss = proveedor
        console.log(this.proveedorss)
      }, (error) => console.log(error)
    )
  }
  //Metodo para calcualr el cambio
  public CalculoCambio() {
    let pago = parseInt(this.form.value.txtPago == undefined ? 1 : this.form.value.txtPago);
    this.txtVuelto = pago - this.txtTotal
  }
  //Metodo para asignar el Tipo de Pago
  public AsignarTipoPago() {

    let pro_credito_contado = this.form.value.txtpro_credito_contado
    if (pro_credito_contado == "Credito") {
      this.pro_ToF = true;
    } else {
      this.pro_ToF = false;
    }

    console.log(this.pro_ToF)
    console.log("..............")
  }
  //Metodo para buscar objetos en un arreglo Proveedor
  public findProveedor() {
    this.agregarProveedor()
    console.log(this.Proveedor.substr(0, 10))
    this.Proveedor = this.proveedors.find(({ pro_cedula_ruc }) => pro_cedula_ruc === this.Proveedor.substr(0, 10))
    console.log(this.Proveedor)
    this.proveedorId.push(this.Proveedor)
    console.log(this.proveedorId + ".....")
    this.informacionProveedor.pro_cedula_ruc = this.Proveedor.pro_cedula_ruc,
      this.informacionProveedor.pro_nombre = this.Proveedor.pro_nombre,
      this.informacionProveedor.pro_direccion = this.Proveedor.pro_direccion,
      this.informacionProveedor.pro_ciudad = this.Proveedor.pro_ciudad,
      this.informacionProveedor.pro_telefono = this.Proveedor.pro_telefono,
      this.informacionProveedor.pro_correo = this.Proveedor.pro_correo,
      this.pro_ToF = this.Proveedor.pro_credito_contado
    if (this.pro_ToF) {
      this.informacionProveedor.pro_credito_contado = "Credito";
    } else {
      this.informacionProveedor.pro_credito_contado = "Contado";
    }
    this.verificar = false;
  }

  //Metodo para buscar objetos en un arreglo Producto

  public findProducto() {
    this.agregarProducto()
    console.log(this.Producto.substr(0, 20))
    this.Producto = this.Productos.find(({ pro_nombre }) => pro_nombre === this.Producto.substr(0, 20))
    console.log('----')
    this.informacionProducto.pro_id = this.Producto.pro_id
    this.informacionProducto.pro_nombre = this.Producto.pro_nombre,
      this.informacionProducto.pro_descripcion = this.Producto.pro_descripcion,
      this.informacionProducto.pro_iva = this.Producto.pro_iva,
      this.informacionProducto.pro_costo = this.Producto.pro_costo
    this.informacionProducto.pro_pvp = this.Producto.pro_pvp,
      this.informacionProducto.pro_imagen = this.Producto.pro_imagen
    this.informacionProducto.pro_stock = this.Producto.pro_stock
    this.informacionProducto.pro_categoria.cat_id = this.Producto.pro_categoria.cat_id
    this.informacionProducto.pro_categoria.cat_nombre = this.Producto.pro_categoria.cat_nombre
  }


  //coger el objeto Producto(productos) 
  get ProductoSelected() {
    return this.form.get('ProductoSelected');
  }
  public agregarProducto() {
    this.Producto = this.ProductoSelected?.value;
    console.log(this.Producto)
    console.log(this.Producto.pro_id, this.Producto.pro_nombre)
  }
  //coger el objeto Proveedor
  get ProveedorSelected() {
    return this.form.get('ProveedorSelected');
  }
  public agregarProveedor() {
    this.Proveedor = this.ProveedorSelected?.value;
    console.log(this.Proveedor)
    console.log(this.Proveedor.pro_nombre, this.Proveedor.pro_cedula_ruc)
  }
  //Agregar Fecha Vencimiento
  public fechaVencimiento() {
    this.FechaVencimiento = Date.parse(this.form.value.fcom_fechaven)
    console.log(this.FechaVencimiento + "Mestro Detalle")
  }
  //----------------------------------------------------------cambiar los atributos por productos
  //Agregar Producto(producto) escogido a un arreglo
  public agregarDetalle_compras() {
    let cantidad = parseInt(this.form.value.txtcantidad == undefined ? 1 : this.form.value.txtcantidad);
    let precioProducto = this.Producto.pro_costo;
    let total = precioProducto * cantidad;
    this.Detalle_compras = {
      /*
           com_id:Number,
         fcom_id:String,
          dcom_cantidad:Number, 
          prod_id:Number, 
          dcom_precio:Number,
           */
      //mar_codigo:this.marca.mar_codigo,
      prod_id: this.Producto.pro_id,
      pro_nombre: this.Producto.pro_nombre,
      pro_costo: this.Producto.pro_costo,
      pro_imagen: this.Producto.pro_imagen,
      dcom_cantidad: cantidad,
      dcom_precio: total,


    };
    this.txtTotal += this.Detalle_compras.dcom_precio;
    this.Detalle_comprass.push(this.Detalle_compras)

  }
  public quitarDetalle_compras(Detalle_compras: any) {
    this.txtTotal = this.txtTotal - Detalle_compras.dcom_precio;
    this.Detalle_comprass.map((det) => { });
    this.Detalle_comprass = [
      ...this.Detalle_comprass.filter((det) => det.prod_id !== Detalle_compras.prod_id),

    ];

  }

  //_____*-- Ingreso de Mestro detale a la base de datos --*_________
  public postCabeceraDetalle_compras() {
    console.log(
      this.fcom_id_final,
      this.informacionProveedor.pro_cedula_ruc,
      this.fecha,
      this.txtTotal
    )

    this.Fac_comprasService.postFac_compras({
      fcom_id: this.fcom_id_final,
      pro_cedula_ruc: this.informacionProveedor.pro_cedula_ruc,
      fcom_fecha: this.fecha,
      fcom_credito_contado: this.pro_ToF,
      fcom_fechavencimiento: this.fecha,
      fcom_total: this.txtTotal

    })
      .subscribe((Fac_compras: any) => {
        console.log('Fac_compras creado correctamente' + Fac_compras.at().fcom_id);
        this.Detalle_comprass.map((Detalle_compras: any) => {
          this.Detalle_comprasService
            .postDetalle_compras({
              /*
              com_id:Number,
            fcom_id:String,
             dcom_cantidad:Number, 
             prod_id:Number, 
             dcom_precio:Number,
              */

              fcom_id: Fac_compras.at().fcom_id,
              dcom_cantidad: Detalle_compras.dcom_cantidad,
              prod_id: Detalle_compras.prod_id,
              dcom_precio: Detalle_compras.dcom_precio
            })
            .subscribe((respuesta: any) => {
              console.log('Detalle creado correctamete', respuesta);
            });
        });
        this.form.reset();
      })
  }
  public refresh() {
    window.location.reload();
  }
}
