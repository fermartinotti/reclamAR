import {Usuario} from "./usuario";
import {Reclamo} from "./reclamo";

export class Ticket{
  id:number
  reclamo: Reclamo
  fechaDeCreacion: string
  motivo: string
  detalle: string
  autor: Usuario
  respuesta: string

  constructor(id:number, reclamo: Reclamo, fechaDeCreacion: string, motivo: string, detalle: string,
              autor: Usuario, respuesta: string){
    this.id=id
    this.reclamo= reclamo
    this.fechaDeCreacion= fechaDeCreacion
    this.motivo=motivo
    this.detalle=detalle
    this.autor=autor
    this.respuesta=respuesta
  }

  static crearDesdeJson(json:any): Ticket{
    const ticket = new Ticket(json.id, Reclamo.crearDesdeJson(json.reclamo),
                              json.fechaDeCreacion, json.motivo, json.detalle,
                              Usuario.crearDesdeJson(json.autor), json.respuesta)
    return ticket;
  }
}
