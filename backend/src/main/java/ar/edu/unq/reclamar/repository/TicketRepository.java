package ar.edu.unq.reclamar.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import ar.edu.unq.reclamar.modelo.Reclamo;
import ar.edu.unq.reclamar.modelo.Ticket;
import ar.edu.unq.reclamar.modelo.Usuario;

public interface TicketRepository extends CrudRepository<Ticket, Long>{
	
	@Query("SELECT t FROM Ticket t where t.autor = ?1")
	public List<Ticket> geTicketByUsuario(Usuario usuario);
}
