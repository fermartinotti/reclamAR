package ar.edu.unq.reclamar.service;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.exceptions.JWTDecodeException;
import com.auth0.jwt.interfaces.DecodedJWT;

import ar.edu.unq.reclamar.modelo.Operador;
import ar.edu.unq.reclamar.modelo.Usuario;
import ar.edu.unq.reclamar.repository.UsuarioRepository;

@Service
public class SecurityServiceImpl implements SecurityService {

	private DecodedJWT jwt;
	
	private Usuario logeado;
	
	@Autowired
	UsuarioRepository usuarioRepository;
	
	@Autowired
	private HttpServletRequest request;

//	@Override
//	public Usuario getUsuarioLogeado() {
//		this.setUsuarioLogueado();
//		return this.logeado;
//	}

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
	public Usuario setUsuarioLogueado(){
 		String token = request.getHeader("Authorization");
		System.out.println(token);
		DecodedJWT jwt = this.decode(token.substring(7)); // Para sacar el "Bearer" del inicio del token
		String subId = jwt.getSubject();
		Usuario usuario = usuarioRepository.getUsuarioBySubId(subId);
		if (usuario != null) {
			return usuario;
		}else {
			String nombre = jwt.getClaim("given_name").asString();
			String apellido = jwt.getClaim("family_name").asString();
			String email = jwt.getClaim("email").asString();
			return crearNuevoUsuarioYLoguear(subId, nombre, apellido, email); 
		}		
	}
	
	private Usuario crearNuevoUsuarioYLoguear(String subId, String nombre, String apellido, String email) {
		Usuario usuario = new Operador(subId);
		usuario.setNombre(nombre);
		usuario.setApellido(apellido);
		usuario.setEmail(email);
		usuarioRepository.save(usuario);
		return usuario;
	}
}
