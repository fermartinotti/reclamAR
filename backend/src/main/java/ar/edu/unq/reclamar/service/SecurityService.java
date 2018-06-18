package ar.edu.unq.reclamar.service;

import com.auth0.jwt.exceptions.JWTDecodeException;
import com.auth0.jwt.interfaces.DecodedJWT;

import ar.edu.unq.reclamar.modelo.Admin;
import ar.edu.unq.reclamar.modelo.Usuario;

public interface SecurityService {
/**
 * 
 * Esta clase sirve para devolver el usuario logeado en el momento de ralizar una accion.
 * 
 */
	
	//public Usuario getUsuarioLogeado();
	
//	public Admin getAdminLogueado();
	
	public DecodedJWT decode (String token) throws JWTDecodeException;  
	
	public Usuario setUsuarioLogueado();
	
//	public void setAdminLogueado(String token);
}
