export class Cuadrilla{
  id: number;
  cantIntegrantes: number;
  estaDisponible: boolean;
  nombre: string


  constructor (id: number, cantIntegrantes: number, estaDisponible: boolean, nombre: string ){
    this.id = id
    this.cantIntegrantes = cantIntegrantes
    this.estaDisponible= estaDisponible
    this.nombre= nombre
  }

  static crearDesdeJson(json:any): Cuadrilla{
    const cuadrilla = new Cuadrilla(json.id, json.cantIntegrantes, json.estaDisponible, json.nombre)
    return cuadrilla
  }
}
