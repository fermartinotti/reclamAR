package ar.edu.unq.reclamar.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import ar.edu.unq.reclamar.modelo.Cuadrilla;

public interface CuadrillaRepository extends CrudRepository<Cuadrilla, Long>{
	
	@Query("SELECT cuadrilla FROM Reclamo")
	public List<Cuadrilla> getCuadrillasAsignadas();
}
