
import {TipoDeReclamo} from "./tipoDeReclamo";
import { Localizacion } from "./localizacion";
import {Autor} from "./autor";
import {Estado} from "./estado";

export class Reclamo{
  id: number;
  autor: Autor;
  detalle: string;
  tipoDeReclamo: TipoDeReclamo;
  lugarDeIncidente:Localizacion;
  fechaDeCreacion:string;
  estado: Estado;

  public get getTipoDeReclamo():TipoDeReclamo{
    return this.tipoDeReclamo
  }

  public set setTipoDeReclamo (tipo: TipoDeReclamo){
    this.tipoDeReclamo = tipo
  }

  public get getLugarDeIncidente():Localizacion{
    return this.lugarDeIncidente
  }

  public set setLugarDeIncidente(loc:Localizacion){
    this.lugarDeIncidente=loc;
  }

  constructor(id: number, autor: Autor, fechaDeCreacion:string, detalle: string, estado: Estado, tipoDeReclamo: TipoDeReclamo, lugarDeIncidente: Localizacion){
    this.id = id
    this.autor = autor
    this.fechaDeCreacion = fechaDeCreacion
    this.detalle = detalle
    this.estado = estado
    this.tipoDeReclamo = tipoDeReclamo
    this.lugarDeIncidente = lugarDeIncidente
  }

  static crearDesdeJson(json:any): Reclamo{
    const reclamo = new Reclamo(json.id, Autor.crearDesdeJson(json.autor), json.fechaDeCreacion, json.detalle, Estado.crearDesdeJson(json.estado)
                                , (json.tipoDeReclamo), Localizacion.crearDesdeJson(json.lugarDeIncidente))
    return reclamo;
  }
}


