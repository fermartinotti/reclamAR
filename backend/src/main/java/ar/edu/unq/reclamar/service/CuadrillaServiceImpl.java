package ar.edu.unq.reclamar.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ar.edu.unq.reclamar.exceptions.DatoInvalidoException;
import ar.edu.unq.reclamar.modelo.Admin;
import ar.edu.unq.reclamar.modelo.Cuadrilla;
import ar.edu.unq.reclamar.repository.CuadrillaRepository;
import ar.edu.unq.reclamar.repository.UsuarioRepository;

@Service
public class CuadrillaServiceImpl implements CuadrillaService {
	
	@Autowired
	private CuadrillaRepository repository;
	
	@Autowired
	private SecurityService securityService;

	@Autowired
	private UsuarioRepository usuarioRepository;
	 
	 
	 @Override
	 @Transactional
	 public void crearCuadrilla(Cuadrilla cuadrilla) throws DatoInvalidoException {
		 Admin adminLogeado = (Admin) securityService.getUsuarioLogeado();
		 repository.save(cuadrilla);
		   
		 adminLogeado.getCuadrillas().add(cuadrilla);
		 usuarioRepository.save(adminLogeado);    
		 
	}
	 	 
	@Override
	public List<Cuadrilla> todasLasCuadrillas() {
		return (List<Cuadrilla>) repository.findAll();	
	}
	
	@Override
	public void eliminarCuadrilla(Cuadrilla cuadrilla) throws DatoInvalidoException {
		if(repository.getCuadrillasAsignadas().contains(cuadrilla)) {
			throw new DatoInvalidoException("La cuadrilla se encuentra asignada a un reclamo"); 
		}
		repository.delete(cuadrilla);
	}

}
