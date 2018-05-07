package ar.edu.unq.reclamar.service;

import java.util.List;
import java.util.Optional;

import ar.edu.unq.reclamar.modelo.Reclamo;

public interface ReclamoService {

	List<Reclamo> misReclamos();

	public void agregarReclamo(Reclamo reclamo);

	Optional<Reclamo> getReclamo(Long id);

	List<Reclamo> todosLosReclamos();

}
