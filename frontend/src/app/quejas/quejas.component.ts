import { Component, OnInit } from '@angular/core';
import {Reclamo} from "../model/reclamo";
import {ReclamoService} from "../services/reclamo.service";
import {TicketDTO} from "../model/ticketDTO";
import {TicketService} from "../services/ticket.service";
import {Ticket} from "../model/ticket";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ModalConfirmacionComponent} from "../modal-confirmacion/modal-confirmacion.component";
import {NgModalContentComponent} from "../ng-modal-content/ng-modal-content.component";

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

  constructor(private reclamoService: ReclamoService, private ticketService: TicketService,
              private modalService: NgbModal) {
    this.reclamoService.misReclamos().then(reclamos=> this.reclamos = reclamos);
    this.ticketService.misTickets().then(tickets => this.tickets = tickets);
  }

  ngOnInit() {
  }

  async generarTicket(): Promise<void>{
    var ticketDTO = new TicketDTO(this.reclamoId, this.motivo, this.detalle)
    await this.ticketService.generarTicket(ticketDTO)
    this.ticketService.misTickets().then(tickets => this.tickets = tickets);
  }


  open(ticket:Ticket) {
    console.log(ticket)
    const modalRef = this.modalService.open(NgModalContentComponent)
    modalRef.componentInstance.status = "respuesta-ticket"
    modalRef.componentInstance.ticket = ticket
  }
}
