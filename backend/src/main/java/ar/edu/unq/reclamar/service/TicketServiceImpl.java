package ar.edu.unq.reclamar.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ar.edu.unq.reclamar.dto.CrearTicketDTO;
import ar.edu.unq.reclamar.dto.ResponderTicketDTO;
import ar.edu.unq.reclamar.modelo.Operador;
import ar.edu.unq.reclamar.modelo.Reclamo;
import ar.edu.unq.reclamar.modelo.Ticket;
import ar.edu.unq.reclamar.repository.ReclamoRepository;
import ar.edu.unq.reclamar.repository.TicketRepository;

@Service
public class TicketServiceImpl implements TicketService{

	@Autowired
	SecurityService securityService;
	
	@Autowired
	ReclamoRepository reclamoRepository;
	
	@Autowired
	TicketRepository repository;
	
	@Override
	@Transactional
	public Ticket crearTicket(CrearTicketDTO dto) {
		Operador usuario = (Operador) securityService.setUsuarioLogueado();
		Reclamo reclamo = reclamoRepository.findOne(dto.getIdReclamo());
		Ticket nuevoTicket = new Ticket(reclamo, usuario, dto.getMotivo(), dto.getDetalle());
		
		repository.save(nuevoTicket);
		
		return nuevoTicket;
		
	}
	
	@Override
	@Transactional
	public List<Ticket>getTickets(){
		Operador usuario = (Operador) securityService.setUsuarioLogueado();
		List<Ticket> tickets = repository.geTicketByUsuario(usuario);
		
		return tickets;
	}

	@Override
	@Transactional
	public List<Ticket> getTodosLosTickets() {
		return (List<Ticket>) repository.findAll();
	}

	@Override
	@Transactional
	public Ticket responderTicket(ResponderTicketDTO dto) {
		Ticket ticket = repository.findOne(dto.getIdTicket());
		ticket.setRespuesta(dto.getRespuesta());
		repository.save(ticket);
		
		return ticket;
	}
	
	
	
}
