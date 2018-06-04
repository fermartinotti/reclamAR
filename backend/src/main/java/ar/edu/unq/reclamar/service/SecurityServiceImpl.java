package ar.edu.unq.reclamar.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.exceptions.JWTDecodeException;
import com.auth0.jwt.interfaces.DecodedJWT;

import ar.edu.unq.reclamar.modelo.Admin;
import ar.edu.unq.reclamar.modelo.Usuario;
import ar.edu.unq.reclamar.repository.AdminRepository;
import ar.edu.unq.reclamar.repository.UsuarioRepository;

@Service
public class SecurityServiceImpl implements SecurityService {

	private DecodedJWT jwt;
	
	private Usuario logeado;
	
	private Admin adminLogueado;
	
	@Autowired
	UsuarioRepository usuarioRepository;
	
	@Autowired
	AdminRepository adminRepository;

	@Override
	public Usuario getUsuarioLogeado() {
		return this.logeado;
	}
	
	@Override
	public Admin getAdminLogueado() {
		return this.adminLogueado;
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
		Usuario usuario = usuarioRepository.getUsuarioBySubId(subId);
		if (usuario != null) {
			this.logeado = usuario;
		}else {
			crearNuevoUsuarioYLoguear(subId); 
		}		
	}
	
	@Override
	public void setAdminLogueado(String token) {
		DecodedJWT jwt = this.decode(token.substring(7)); // Para sacar el "Bearer" del inicio del token
		String subId = jwt.getSubject();
		Admin admin = adminRepository.getAdminBySubId(subId);
		if (admin != null) {
			this.adminLogueado = admin;
		}else {
			crearNuevoAdminYLoguear(subId); 
		}		
	}
	
	private void crearNuevoUsuarioYLoguear(String subId) {
		Usuario usuario = new Usuario(subId);
		usuarioRepository.save(usuario);
		this.logeado = usuario;
	}
	
	private void crearNuevoAdminYLoguear(String subId) {
		Admin admin = new Admin(subId);
		adminRepository.save(admin);
		this.adminLogueado = admin;
	}
}
