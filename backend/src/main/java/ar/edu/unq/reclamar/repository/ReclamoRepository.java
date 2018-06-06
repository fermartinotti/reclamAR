package ar.edu.unq.reclamar.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import ar.edu.unq.reclamar.modelo.Reclamo;
import ar.edu.unq.reclamar.modelo.Usuario;

public interface ReclamoRepository extends CrudRepository<Reclamo, Long>{

	@Query("SELECT r FROM Reclamo r where r.autor = ?1")
	public List<Reclamo> getReclamosByUsuario(Usuario usuario);
}
