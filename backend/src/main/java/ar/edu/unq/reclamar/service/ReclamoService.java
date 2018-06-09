package ar.edu.unq.reclamar.service;

import java.util.List;
import java.util.Optional;

import ar.edu.unq.reclamar.dto.CerrarReclamoDTO;
import ar.edu.unq.reclamar.modelo.Prueba;
import ar.edu.unq.reclamar.modelo.Reclamo;

public interface ReclamoService {

	List<Reclamo> misReclamos();

	public void agregarReclamo(Reclamo reclamo);

	Optional<Reclamo> getReclamo(Long id);
	
	Reclamo getReclamoById(Long id);

	List<Reclamo> todosLosReclamos();

//	void asignacionCuadrilla(Reclamo reclamo, Cuadrilla cuadrilla, LocalDate fechaTerminacion);
	
	void asignacionCuadrilla(Prueba prueba);
	
	void finalizarReclamo(CerrarReclamoDTO cerrar);

}
