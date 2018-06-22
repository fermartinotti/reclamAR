export class Estado{
  type: string
  fechaIninio: string
  comentarioReapertura: string

  constructor(type: string, fechaInicio: string){
    this.type = type
    this.fechaIninio = fechaInicio

  }

  static crearDesdeJson(json:any): Estado{
    const estado = new Estado(json.type, json.fechaIninio)
    return estado
  }
}
