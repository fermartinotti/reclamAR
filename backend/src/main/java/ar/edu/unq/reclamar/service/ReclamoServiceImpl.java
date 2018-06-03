package ar.edu.unq.reclamar.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ar.edu.unq.reclamar.exceptions.DatoInvalidoException;
import ar.edu.unq.reclamar.modelo.Abierto;
import ar.edu.unq.reclamar.modelo.Reclamo;
import ar.edu.unq.reclamar.modelo.Usuario;
import ar.edu.unq.reclamar.repository.EstadoRepository;
import ar.edu.unq.reclamar.repository.LocalizacionRepository;
import ar.edu.unq.reclamar.repository.ReclamoRepository;
import ar.edu.unq.reclamar.repository.TipodDeReclamoRepository;
import ar.edu.unq.reclamar.repository.UsuarioRepository;

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

	@Override
	public List<Reclamo> misReclamos() {
		return repository.getReclamosByUsuario(securityService.getUsuarioLogeado());
	}

	@Override
	@Transactional
	public void agregarReclamo(Reclamo reclamo) throws DatoInvalidoException {
		Usuario userLogeado = securityService.getUsuarioLogeado();
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
	}

	@Override
	public Optional<Reclamo> getReclamo(Long id) {
		return Optional.ofNullable(repository.findOne(id));
	}

	@Override
	public List<Reclamo> todosLosReclamos() {
		return (List<Reclamo>) repository.findAll();
	}
}
