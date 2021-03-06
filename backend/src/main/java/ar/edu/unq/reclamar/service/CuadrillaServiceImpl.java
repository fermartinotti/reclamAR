package ar.edu.unq.reclamar.service;

import java.util.List;
import java.util.Optional;

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
	 public Cuadrilla crearCuadrilla(Cuadrilla cuadrilla) throws DatoInvalidoException {
		 Admin adminLogeado = (Admin) securityService.setUsuarioLogueado();
		 
		 if(cuadrilla.getCantIntegrantes() <= 0)
			 throw new DatoInvalidoException("El valor ingresado es incorrecto");
		 
		 if(cuadrilla.getNombre().length() > 30)
			 throw new DatoInvalidoException("La cuadrilla puede tener solo 30 caracteres");
		 
		 Cuadrilla cuadrillaNueva = new Cuadrilla(cuadrilla.getCantIntegrantes(), 
				 cuadrilla.getNombre());
		 
		 repository.save(cuadrillaNueva);
		   
		 adminLogeado.getCuadrillas().add(cuadrillaNueva);
		 usuarioRepository.save(adminLogeado);
		 return cuadrillaNueva;
		 
	}
	 	 
	@Override
	public List<Cuadrilla> todasLasCuadrillas() {
		return (List<Cuadrilla>) repository.findAll();	
	}
	
	
	@Override
	public void eliminarCuadrilla(Long idCuadrilla) {
		Cuadrilla cuadrilla = repository.findOne(idCuadrilla);
		if(cuadrilla == null)
			throw new DatoInvalidoException("No se encuentra la cuadrilla que quiere borrar"); 
		
		if(cuadrilla.getReclamosAsignados().size() != 0) 
			throw new DatoInvalidoException("La cuadrilla se encuentra asignada a un reclamo"); 
		
		repository.delete(cuadrilla);
	}

	@Override
	public Optional<Cuadrilla> getCuadrilla(Long id) {
		return Optional.ofNullable(repository.findOne(id));
	}
}
