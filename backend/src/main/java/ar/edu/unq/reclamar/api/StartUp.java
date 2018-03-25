package ar.edu.unq.reclamar.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import ar.edu.unq.reclamar.modelo.Operador;
import ar.edu.unq.reclamar.repository.OperadorRepository;

@Component
public class StartUp implements ApplicationRunner {
	private OperadorRepository operadorRepository;

	@Override
	public void run(ApplicationArguments arg0) throws Exception {
		Operador operador = new Operador();
		operador.setNombre("operadorNombre");
		operador.setApellido("operadorApellido");
		this.operadorRepository.save(operador);
		
	}

	@Autowired
	public void setOperadorRepository(OperadorRepository operadorRepository) {
		this.operadorRepository = operadorRepository;
	}
	
	
}
