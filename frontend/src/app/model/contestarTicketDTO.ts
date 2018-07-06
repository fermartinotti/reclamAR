export class ContestarTicketDTO{
  idTicket: number
  respuesta: string

  constructor(idTicket: number, respuesta: string){
    this.idTicket=idTicket
    this.respuesta=respuesta
  }

}
