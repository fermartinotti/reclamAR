import {Usuario} from "./usuario";
import {Reclamo} from "./reclamo";

export class Ticket{
  reclamo: Reclamo
  fechaDeCreacion: string
  motivo: string
  detalle: string
  autor: Usuario
  respuesta: string

  constructor(reclamo: Reclamo, fechaDeCreacion: string, motivo: string, detalle: string,
              autor: Usuario, respuesta: string){
    this.reclamo= reclamo
    this.fechaDeCreacion= fechaDeCreacion
    this.motivo=motivo
    this.detalle=detalle
    this.autor=autor
    this.respuesta=respuesta
  }

  static crearDesdeJson(json:any): Ticket{
    const ticket = new Ticket(Reclamo.crearDesdeJson(json.reclamo),
                              json.fechaDeCreacion, json.motivo, json.detalle,
                              Usuario.crearDesdeJson(json.autor), json.respuesta)
    return ticket;
  }
}
