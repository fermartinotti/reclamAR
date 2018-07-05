export class TicketDTO{
  idReclamo: number;
  motivo: string;
  detalle: string;

  constructor(idReclamo:number, motivo:string, detalle:string){
    this.idReclamo=idReclamo
    this.motivo= motivo
    this.detalle= detalle
  }
}
