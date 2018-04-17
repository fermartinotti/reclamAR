export class Autor{
  id:number
  nombre: string
  apellido: string

  constructor(id: number, nombre: string, apellido: string){
    this.id = id
    this.nombre=nombre
    this.apellido = apellido
  }

  static crearDesdeJson(json:any): Autor{
    const autor = new Autor(json.id, json.nombre, json.apellido)
    return autor
  }
}
