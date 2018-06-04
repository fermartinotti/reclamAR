package ar.edu.unq.reclamar.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ar.edu.unq.reclamar.exceptions.DatoInvalidoException;
import ar.edu.unq.reclamar.modelo.Admin;
import ar.edu.unq.reclamar.modelo.Cuadrilla;
import ar.edu.unq.reclamar.modelo.EmpleadoCuadrilla;
import ar.edu.unq.reclamar.repository.AdminRepository;
import ar.edu.unq.reclamar.repository.CuadrillaRepository;
import ar.edu.unq.reclamar.repository.EmpleadoCuadrillaRepository;

@Service
public class CuadrillaServiceImpl implements CuadrillaService {
	
	@Autowired
	private AdminRepository adminRepository;
	
	@Autowired
	private CuadrillaRepository repository;
	
	@Autowired
	private EmpleadoCuadrillaRepository cuadrillaRepository;
	
	@Autowired
	private SecurityService securityService;

	@Override
	@Transactional
	public void crearCuadrilla(Integer cantEmpleados) throws DatoInvalidoException {
		Admin adminLogeado = securityService.getAdminLogueado();
		
		Cuadrilla cuadrilla = new Cuadrilla();
		
		if(cuadrilla.puedeCrearCuadrilla(cantEmpleados)) {
			
		
		for(int i = 0; cantEmpleados > i; i++) {
			EmpleadoCuadrilla empleado = new EmpleadoCuadrilla();
			cuadrillaRepository.save(empleado);
			cuadrilla.agregarEmpleado(empleado);
		}
		adminLogeado.getCuadrillas().add(cuadrilla);
		repository.save(cuadrilla);
		adminRepository.save(adminLogeado);		
		}
	}

	@Override
	public List<Cuadrilla> todasLasCuadrillas() {
		return (List<Cuadrilla>) repository.findAll();	
	}

}
