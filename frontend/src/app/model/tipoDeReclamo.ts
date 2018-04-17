export class TipoDeReclamo{
  public type:string;
  public problamePalo: boolean
  public problemaFoco: boolean

  constructor(type: string, problemaPalo: boolean, problemaFoco: boolean){
    this.type = type
    this.problamePalo= problemaPalo
    this.problemaFoco= problemaFoco
  }

  static crearDesdeJson(json:any): TipoDeReclamo{
    const tipoDeReclamo = new TipoDeReclamo(json.type, json.problemaPalo, json.problemaFoco)
    return tipoDeReclamo
  }
}
