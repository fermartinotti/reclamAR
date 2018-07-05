import { Component, OnInit } from '@angular/core';
import {Reclamo} from "../model/reclamo";
import {ReclamoService} from "../services/reclamo.service";
import {TicketDTO} from "../model/ticketDTO";
import {TicketService} from "../services/ticket.service";
import {Ticket} from "../model/ticket";

@Component({
  selector: 'app-quejas',
  templateUrl: './quejas.component.html',
  styleUrls: ['./quejas.component.css']
})
export class QuejasComponent implements OnInit {


  tickets:Array<Ticket>
  reclamos:Array<Reclamo>;
  reclamoId:number = null;
  motivo: string = null
  detalle:string;

  constructor(private reclamoService: ReclamoService, private ticketService: TicketService) {
    this.reclamoService.misReclamos().then(reclamos=> this.reclamos = reclamos);
    this.ticketService.misTickets().then(tickets => this.tickets = tickets);
  }

  ngOnInit() {
  }

  async generarTicket(): Promise<void>{
    var ticketDTO = new TicketDTO(this.reclamoId, this.motivo, this.detalle)
    await this.ticketService.generarTicket(ticketDTO)
    this.motivo = null
    this.reclamoId = null
    this.detalle = null
    this.ticketService.misTickets().then(tickets => this.tickets = tickets);
  }
}
