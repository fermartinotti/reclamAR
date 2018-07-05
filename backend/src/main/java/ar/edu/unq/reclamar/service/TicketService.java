package ar.edu.unq.reclamar.service;

import java.util.List;

import ar.edu.unq.reclamar.dto.CrearTicketDTO;
import ar.edu.unq.reclamar.modelo.Ticket;

public interface TicketService {

	Ticket crearTicket(CrearTicketDTO dto);
	
	List<Ticket> getTickets();
	
}
