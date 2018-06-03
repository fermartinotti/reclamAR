package ar.edu.unq.reclamar.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import ar.edu.unq.reclamar.modelo.Usuario;

public interface UsuarioRepository extends CrudRepository<Usuario, Long> {

	@Query("SELECT o FROM Usuario o where o.subId = ?1")
	public Usuario getUsuarioBySubId(String subId);
}
