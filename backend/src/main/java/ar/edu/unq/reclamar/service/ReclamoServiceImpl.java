package ar.edu.unq.reclamar.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ar.edu.unq.reclamar.modelo.Reclamo;
import ar.edu.unq.reclamar.repository.ReclamoRepository;

@Service
public class ReclamoServiceImpl implements ReclamoService {
	
	@Autowired
	private ReclamoRepository repository;
	
	@Autowired
	private SecurityService securityService;

	@Override
	public List<Reclamo> misReclamos() {
		return repository.getReclamosByOperador(securityService.getOperadorLogeado());
	}
	

}
