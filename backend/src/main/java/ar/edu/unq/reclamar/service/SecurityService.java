package ar.edu.unq.reclamar.service;

import ar.edu.unq.reclamar.modelo.Operador;

public interface SecurityService {
/**
 * 
 * Esta clase sirve para devolver el usuario logeado en el momento de ralizar una accion.
 * 
 */
	public Operador getOperadorLogeado();
}
