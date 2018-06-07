package ar.edu.unq.reclamar.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mashape.unirest.http.exceptions.UnirestException;

import ar.edu.unq.reclamar.exceptions.DatoInvalidoException;
import ar.edu.unq.reclamar.modelo.Abierto;
import ar.edu.unq.reclamar.modelo.Cuadrilla;
import ar.edu.unq.reclamar.modelo.EnReparacion;
import ar.edu.unq.reclamar.modelo.Operador;
import ar.edu.unq.reclamar.modelo.Reclamo;
import ar.edu.unq.reclamar.modelo.Usuario;
import ar.edu.unq.reclamar.repository.CuadrillaRepository;
import ar.edu.unq.reclamar.repository.EstadoRepository;
import ar.edu.unq.reclamar.repository.LocalizacionRepository;
import ar.edu.unq.reclamar.repository.ReclamoRepository;
import ar.edu.unq.reclamar.repository.TipodDeReclamoRepository;
import ar.edu.unq.reclamar.repository.UsuarioRepository;
import ar.edu.unq.reclamar.utils.EmailSender;

@Service
public class ReclamoServiceImpl implements ReclamoService {
	
	@Autowired
	private ReclamoRepository repository;
	
	@Autowired
	private UsuarioRepository usuarioRepository;
	
	@Autowired
	private SecurityService securityService;
	
	@Autowired
	private EstadoRepository estadoRepository;
	
	@Autowired
	private TipodDeReclamoRepository tipoDeReclamoRepository;
	
	@Autowired
	private LocalizacionRepository localizacionRepository;
	
	@Autowired
	private CuadrillaRepository cuadrillaRepository;

	@Override
	public List<Reclamo> misReclamos() {
		return repository.getReclamosByUsuario(securityService.getUsuarioLogeado());
	}

	@Override
	@Transactional
	public void agregarReclamo(Reclamo reclamo) throws DatoInvalidoException {
		Operador userLogeado = (Operador) securityService.getUsuarioLogeado();
		reclamo.setAutor(userLogeado);
		reclamo.setFechaDeCreacion(LocalDateTime.now());
		
		Abierto estado = new Abierto();
		estadoRepository.save(estado);
		
		reclamo.setEstado(estado);		
		reclamo.getEstados().add(estado);
		
		localizacionRepository.save(reclamo.getLugarDeIncidente());
		tipoDeReclamoRepository.save(reclamo.getTipoDeReclamo());
		
		repository.save(reclamo);
		userLogeado.getReclamos().add(reclamo);
		usuarioRepository.save(userLogeado);	
		try {
			EmailSender.sendEmail(userLogeado.getEmail(),
					"Su reclamo se creo con exito", 
					"Muchas gracias por reportar la problematica. Su reclamo numero: " 
					+ reclamo.getId() + "fue creado con exito. ");
		} catch (UnirestException e) {
			
		}
	}
	
	@Override
	@Transactional
	public void asignacionCuadrilla(Reclamo reclamo){
		Usuario userLogeado = securityService.getUsuarioLogeado();
//		reclamo.setAutor(userLogeado);
//		reclamo.setFechaDeCreacion(LocalDateTime.now());
		
//		if(userLogeado.hayCuadrillaDisponible()){
//			userLogeado.asignarCuadrilla(reclamo);
//		}
		
		Cuadrilla cuadrilla = reclamo.getCuadrilla();
		cuadrillaRepository.save(cuadrilla);
		EnReparacion estado = new EnReparacion();
		estadoRepository.save(estado);
		
		reclamo.setEstado(estado);		
		reclamo.getEstados().add(estado);
	
		repository.save(reclamo);
		usuarioRepository.save(userLogeado);		
	}

	@Override
	public Optional<Reclamo> getReclamo(Long id) {
		return Optional.ofNullable(repository.findOne(id));
	}

	@Override
	public List<Reclamo> todosLosReclamos() {
		return (List<Reclamo>) repository.findAll();
	}

	@Override
	public Reclamo getReclamoById(Long id) {
		return repository.findOne(id);
	}
}
