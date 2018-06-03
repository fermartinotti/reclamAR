package ar.edu.unq.reclamar.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ar.edu.unq.reclamar.exceptions.DatoInvalidoException;
import ar.edu.unq.reclamar.modelo.Cuadrilla;
import ar.edu.unq.reclamar.modelo.EmpleadoCuadrilla;
import ar.edu.unq.reclamar.modelo.Usuario;
import ar.edu.unq.reclamar.repository.CuadrillaRepository;
import ar.edu.unq.reclamar.repository.EmpleadoCuadrillaRepository;
import ar.edu.unq.reclamar.repository.UsuarioRepository;

@Service
public class CuadrillaServiceImpl implements CuadrillaService {
	
	@Autowired
	private UsuarioRepository usuarioRepository;
	
	@Autowired
	private CuadrillaRepository repository;
	
	@Autowired
	private EmpleadoCuadrillaRepository cuadrillaRepository;
	
	@Autowired
	private SecurityService securityService;

	@Override
	@Transactional
	public void crearCuadrilla(Integer cantEmpleados) throws DatoInvalidoException {
		Usuario userLogeado = securityService.getUsuarioLogeado();
		
		Cuadrilla cuadrilla = new Cuadrilla();
		
		for(int i = 0; cantEmpleados > i; i++) {
			EmpleadoCuadrilla empleado = new EmpleadoCuadrilla();
			cuadrillaRepository.save(empleado);
			cuadrilla.agregarEmpleado(empleado);
		}
		userLogeado.getCuadrillas().add(cuadrilla);
		repository.save(cuadrilla);
		usuarioRepository.save(userLogeado);		
	}

	@Override
	public List<Cuadrilla> todasLasCuadrillas() {
		return (List<Cuadrilla>) repository.findAll();	
	}

}
