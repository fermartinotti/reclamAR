package ar.edu.unq.reclamar.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ar.edu.unq.reclamar.repository.ReclamoRepository;

@Service
public class ReclamoServiceImpl implements ReclamoService {
	
	@Autowired
	private ReclamoRepository repository;
	
	@Autowired
	private SecurityService securityService;

	@Override
	public Object misReclamos() {
		return repository.getReclamosByOperador(securityService.getOperadorLogeado());
	}
	

}
