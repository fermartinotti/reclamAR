import { Component, OnInit } from '@angular/core';
import {TicketService} from "../services/ticket.service";
import {Ticket} from "../model/ticket";
import {ContestarTicketDTO} from "../model/contestarTicketDTO";
import {NgModalContentComponent} from "../ng-modal-content/ng-modal-content.component";
import {Ng4LoadingSpinnerService  } from 'ng4-loading-spinner';
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

  constructor(private ticketService: TicketService, private spinner: Ng4LoadingSpinnerService, private modalService: NgbModal) { }

  ngOnInit() {
    this.ticketService.todosLosTickets().then(tickets => this.tickets = tickets);
    this.ticketService.todosLosTickets().then(tickets => this.tickets =
      tickets.filter(ticket =>
        ticket.respuesta === null));
  }


  async responderTicket():Promise<void>{
    this.spinner.show() 
    var respuesta = new ContestarTicketDTO(this.ticketSeleccionado.id, this.respuesta)
    await this.ticketService.responderTicket(respuesta)
    
    .then(res => {
      setTimeout(() => {
        this.spinner.hide();
        this.openDlgError("responder-ticket-ok");
        this.resetearCampos();
        this.ticketService.todosLosTickets().then(tickets => this.tickets = tickets.filter(ticket => ticket.respuesta === null));
      }, 3000);
    }, 
    (err)=> {
      setTimeout(() => {
        this.spinner.hide();
        console.log(err.error);
        this.openDlgError("responder-ticket-error");
        this.resetearCampos();
      }, 3000);
    })
   // await this.ticketService.todosLosTickets().then(tickets => this.tickets = tickets.filter(ticket => ticket.respuesta === null));
  }

  openDlgError(status: string){
    const modalRef = this.modalService.open(NgModalContentComponent)
    modalRef.componentInstance.status = status
  }

  selectTicket(t: Ticket):void{
    console.log(t)
    this.ticketSeleccionado = t;
  }

  resetearCampos():void{
    this.ticketSeleccionado = null;
    this.respuesta = null;
  }
}
