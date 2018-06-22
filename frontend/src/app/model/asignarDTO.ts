export class AsignarDTO{
  idReclamo: number
  idCuadrilla: number
  fecha: string


  constructor(idReclamo: number, idCuadrilla: number, fecha: string){
    this.idReclamo= idReclamo
    this.idCuadrilla= idCuadrilla
    this.fecha = fecha
  }

}


