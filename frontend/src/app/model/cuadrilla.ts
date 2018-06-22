import {Reclamo} from "./reclamo";

export class Cuadrilla{
  id: number;
  cantIntegrantes: number;
  nombre: string
  reclamos: Array<Reclamo>;


  constructor (id: number, cantIntegrantes: number, nombre: string , reclamos: Array<Reclamo>){
    this.id = id
    this.cantIntegrantes = cantIntegrantes
    this.nombre= nombre
    this.reclamos= reclamos

  }

  static crearDesdeJson(json:any): Cuadrilla{
    const cuadrilla = new Cuadrilla(json.id, json.cantIntegrantes, json.nombre, json.reclamos)
    return cuadrilla
  }
}
