package ar.edu.unq.reclamar.service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import ar.edu.unq.reclamar.modelo.Cuadrilla;
import ar.edu.unq.reclamar.modelo.Reclamo;

public interface ReclamoService {

	List<Reclamo> misReclamos();

	public void agregarReclamo(Reclamo reclamo);

	Optional<Reclamo> getReclamo(Long id);
	
	Reclamo getReclamoById(Long id);

	List<Reclamo> todosLosReclamos();

	void asignacionCuadrilla(Reclamo reclamo, Cuadrilla cuadrilla, LocalDate fechaTerminacion);
	
	void finalizarReclamo(Reclamo reclamo, String comentario);

}
