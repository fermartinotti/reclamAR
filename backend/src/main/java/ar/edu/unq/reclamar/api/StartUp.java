package ar.edu.unq.reclamar.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import ar.edu.unq.reclamar.modelo.Admin;
import ar.edu.unq.reclamar.modelo.Usuario;
import ar.edu.unq.reclamar.repository.AdminRepository;
import ar.edu.unq.reclamar.repository.UsuarioRepository;

@Component
public class StartUp implements ApplicationRunner {
	
	private UsuarioRepository usuarioRepository;

	@Override
	public void run(ApplicationArguments arg0) throws Exception {
		Usuario usuario = new Usuario();
		usuario.setNombre("usuarioNombre");
		usuario.setApellido("usuarioApellido");
		this.usuarioRepository.save(usuario);
		
	}

	@Autowired
	public void setUsuarioRepository(UsuarioRepository usuarioRepository) {
		this.usuarioRepository = usuarioRepository;
	}
	
	
}
