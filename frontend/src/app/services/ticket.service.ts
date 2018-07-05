import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {baseURL} from "./reclamo.service";
import {TicketDTO} from "../model/ticketDTO";
import {Ticket} from "../model/ticket";

@Injectable()
export class TicketService{
  constructor (private  httpClient: HttpClient){

  }

  async generarTicket(ticketDTO: TicketDTO):Promise<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return await this.httpClient.post(baseURL+'/api/rest/tickets', ticketDTO, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`)
    }).toPromise()
  }

  async misTickets(): Promise<Array<Ticket>> {
    return await this.httpClient.get<Array<Ticket>>(baseURL + '/api/rest/tickets/', {
      headers: new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`)
    }).map(respuesta => respuesta.map(ticket => Ticket.crearDesdeJson(ticket))).toPromise();
  }


}
