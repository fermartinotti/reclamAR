package ar.edu.unq.reclamar.service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ar.edu.unq.reclamar.modelo.Abierto;
import ar.edu.unq.reclamar.modelo.Operador;
import ar.edu.unq.reclamar.modelo.Reclamo;
import ar.edu.unq.reclamar.repository.EstadoRepository;
import ar.edu.unq.reclamar.repository.OperadorRepository;
import ar.edu.unq.reclamar.repository.ReclamoRepository;
import ar.edu.unq.reclamar.repository.TipodDeReclamoRepository;

@Service
public class ReclamoServiceImpl implements ReclamoService {
	
	@Autowired
	private ReclamoRepository repository;
	
	@Autowired
	private OperadorRepository operadorRepository;
	
	@Autowired
	private SecurityService securityService;
	
	@Autowired
	private EstadoRepository estadoRepository;
	
	@Autowired
	private TipodDeReclamoRepository tipoDeReclamoRepository;

	@Override
	public List<Reclamo> misReclamos() {
		return repository.getReclamosByOperador(securityService.getOperadorLogeado());
	}

	@Override
	@Transactional
	public void agregarReclamo(Reclamo reclamo) {
		Operador opLogeado = securityService.getOperadorLogeado();
		
		reclamo.setAutor(opLogeado);
		reclamo.setFechaDeCreacion(LocalDate.now());
		
		Abierto estado = new Abierto();
		estadoRepository.save(estado);
		
		reclamo.setEstado(estado);		
		
		tipoDeReclamoRepository.save(reclamo.getTipoDeReclamo());
		
		repository.save(reclamo);
		opLogeado.getReclamos().add(reclamo);
		operadorRepository.save(opLogeado);
		
		
	}

	@Override
	public Optional<Reclamo> getReclamo(Long id) {
		return Optional.ofNullable(repository.findOne(id));
	}
	

}
