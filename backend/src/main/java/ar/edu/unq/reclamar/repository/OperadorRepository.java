package ar.edu.unq.reclamar.repository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.jpa.repository.Query;

import ar.edu.unq.reclamar.modelo.Operador;

public interface OperadorRepository extends CrudRepository<Operador, Long> {

	@Query("SELECT o FROM Operador o where o.subId = ?1")
	public Operador getOperadorBySubId(String subId);
}
