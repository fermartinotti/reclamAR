package ar.edu.unq.reclamar.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ar.edu.unq.reclamar.modelo.Operador;
import ar.edu.unq.reclamar.modelo.Reclamo;
import ar.edu.unq.reclamar.repository.OperadorRepository;
import ar.edu.unq.reclamar.repository.ReclamoRepository;

@Service
public class ReclamoServiceImpl implements ReclamoService {
	
	@Autowired
	private ReclamoRepository repository;
	
	@Autowired
	private OperadorRepository operadorRepository;
	
	@Autowired
	private SecurityService securityService;

	@Override
	public List<Reclamo> misReclamos() {
		return repository.getReclamosByOperador(securityService.getOperadorLogeado());
	}

	@Override
	@Transactional
	public void agregarReclamo(Reclamo reclamo) {
		Operador opLogeado = securityService.getOperadorLogeado();
		

		Reclamo nuevoReclamo = new Reclamo(
				opLogeado,
				reclamo.getDetalle()
				);
		
		repository.save(nuevoReclamo);
		opLogeado.getReclamos().add(nuevoReclamo);
		operadorRepository.save(opLogeado);
		
		
	}

	@Override
	public Optional<Reclamo> getReclamo(Long id) {
		return Optional.ofNullable(repository.findOne(id));
	}
	

}
