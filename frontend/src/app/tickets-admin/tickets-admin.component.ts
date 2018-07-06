import { Component, OnInit } from '@angular/core';
import {TicketService} from "../services/ticket.service";
import {Ticket} from "../model/ticket";
import {ContestarTicketDTO} from "../model/contestarTicketDTO";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-tickets-admin',
  templateUrl: './tickets-admin.component.html',
  styleUrls: ['./tickets-admin.component.css']
})
export class TicketsAdminComponent implements OnInit {

  tickets:Array<Ticket>
  ticketSeleccionado:Ticket
  respuesta:string=null

  constructor(private ticketService: TicketService) { }

  ngOnInit() {
    this.ticketService.todosLosTickets().then(tickets => this.tickets = tickets);
    this.ticketService.todosLosTickets().then(tickets => this.tickets =
      tickets.filter(ticket =>
        ticket.respuesta === null));
  }


  async responderTicket():Promise<void>{
    var respuesta = new ContestarTicketDTO(this.ticketSeleccionado.id, this.respuesta)
    await this.ticketService.responderTicket(respuesta)
    this.ticketService.misTickets().then(tickets => this.tickets =
      tickets.filter(ticket =>
        ticket.respuesta === null));
  }


  selectTicket(t: Ticket):void{
    console.log(t)
    this.ticketSeleccionado = t;
  }

}
