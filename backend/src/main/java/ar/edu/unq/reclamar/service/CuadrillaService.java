package ar.edu.unq.reclamar.service;

import java.util.List;
import java.util.Optional;

import ar.edu.unq.reclamar.modelo.Cuadrilla;

public interface CuadrillaService {

	public void crearCuadrilla(Cuadrilla cuadrilla);
	
	List<Cuadrilla> todasLasCuadrillas();
	
	void eliminarCuadrilla(Long idCuadrilla);
	
	Optional<Cuadrilla> getCuadrilla(Long id);
	
}
