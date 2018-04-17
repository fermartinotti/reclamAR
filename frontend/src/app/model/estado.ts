export class Estado{
  type: string

  constructor(type: string){
    this.type = type
  }

  static crearDesdeJson(json:any): Estado{
    const estado = new Estado(json.type)
    return estado
  }
}
