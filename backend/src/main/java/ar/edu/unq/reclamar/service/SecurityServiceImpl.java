package ar.edu.unq.reclamar.service;

import java.security.interfaces.RSAPrivateKey;
import java.security.interfaces.RSAPublicKey;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTDecodeException;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.DecodedJWT;

import ar.edu.unq.reclamar.modelo.Operador;
import ar.edu.unq.reclamar.modelo.Usuario;
import ar.edu.unq.reclamar.repository.OperadorRepository;
import ar.edu.unq.reclamar.repository.ReclamoRepository;

@Service
public class SecurityServiceImpl implements SecurityService {

	private DecodedJWT jwt;
	private Operador logeado;
	
	@Autowired
	OperadorRepository usuarioRepository;

	@Override
	public Operador getOperadorLogeado() {
		return this.logeado;
	}

	@Override
	public DecodedJWT decode(String token) throws JWTDecodeException {	
		try {
		    this.jwt = JWT.decode(token);
		} catch (JWTDecodeException exception){
		    //Invalid token
		}
		return jwt;
	}

	@Override
	public void setUsuarioLogueado(String token) {
		DecodedJWT jwt = this.decode(token.substring(7)); // Para sacar el "Bearer" del inicio del token
		String subId = jwt.getSubject();
		Operador operador = usuarioRepository.getOperadorBySubId(subId);
		if (operador != null) {
			this.logeado = operador;
		}else {
			crearNuevoUsuarioYLoguear(subId); 
		}		
	}
	
	private void crearNuevoUsuarioYLoguear(String subId) {
		Operador operador = new Operador(subId);
		usuarioRepository.save(operador);
		this.logeado = operador;
	}
	


}
