export class PuntuacionReclamoDTO{
  idReclamo: number
  puntuacion: number

  constructor(idReclamo:number, puntuacion:number){
    this.idReclamo = idReclamo
    this.puntuacion = puntuacion
  }
}
