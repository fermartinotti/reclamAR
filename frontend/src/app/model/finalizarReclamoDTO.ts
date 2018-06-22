export class FinalizarReclamoDTO{
  idReclamo: number
  idCuadrilla: number

  constructor(idReclamo:number, idCuadrilla:number){
    this.idReclamo = idReclamo
    this.idCuadrilla = idCuadrilla
  }

}
