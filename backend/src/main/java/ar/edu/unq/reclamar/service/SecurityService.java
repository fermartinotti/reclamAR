package ar.edu.unq.reclamar.service;

import com.auth0.jwt.exceptions.JWTDecodeException;
import com.auth0.jwt.interfaces.DecodedJWT;

import ar.edu.unq.reclamar.modelo.Operador;

public interface SecurityService {
/**
 * 
 * Esta clase sirve para devolver el usuario logeado en el momento de ralizar una accion.
 * 
 */
	public Operador getOperadorLogeado();
	
	public DecodedJWT decode (String token) throws JWTDecodeException;  
	
	public void setUsuarioLogueado(String token);
}
