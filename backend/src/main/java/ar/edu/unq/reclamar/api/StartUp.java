package ar.edu.unq.reclamar.api;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import ar.edu.unq.reclamar.modelo.Admin;
import ar.edu.unq.reclamar.modelo.Operador;
import ar.edu.unq.reclamar.modelo.Usuario;
import ar.edu.unq.reclamar.repository.UsuarioRepository;

@Component
public class StartUp implements ApplicationRunner {
	
	private UsuarioRepository usuarioRepository;

	@Override
	public void run(ApplicationArguments arg0) throws Exception {
		Admin admin = new Admin("auth0|5b17261c157859716f2c7518");
		admin.setNombre("Administrador");
		admin.setApellido("ReclamAR");
		admin.setEmail("administrador@reclamar.com.ar");
		Optional<Usuario> adminExistente = Optional.ofNullable( this.usuarioRepository.getUsuarioBySubId("auth0|5b17261c157859716f2c7518"));
		
		if(!adminExistente.isPresent()) {
			this.usuarioRepository.save(admin);
		}
		
	}

	@Autowired
	public void setUsuarioRepository(UsuarioRepository usuarioRepository) {
		this.usuarioRepository = usuarioRepository;
	}
	
	
}
