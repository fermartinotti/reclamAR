package ar.edu.unq.reclamar.service;

import java.util.List;

import ar.edu.unq.reclamar.modelo.Cuadrilla;

public interface CuadrillaService {

	public void crearCuadrilla(Integer cantidadEmpleados, String nombre);
	
	List<Cuadrilla> todasLasCuadrillas();
	
}
