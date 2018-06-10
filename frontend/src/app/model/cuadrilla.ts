export class Cuadrilla{
  id: number;
  cantIntegrantes: number;
  nombre: string


  constructor (id: number, cantIntegrantes: number, nombre: string ){
    this.id = id
    this.cantIntegrantes = cantIntegrantes
    this.nombre= nombre
  }

  static crearDesdeJson(json:any): Cuadrilla{
    const cuadrilla = new Cuadrilla(json.id, json.cantIntegrantes, json.nombre)
    return cuadrilla
  }
}
