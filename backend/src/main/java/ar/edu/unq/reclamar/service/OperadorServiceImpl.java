package ar.edu.unq.reclamar.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ar.edu.unq.reclamar.modelo.Operador;
import ar.edu.unq.reclamar.repository.OperadorRepository;

@Service
public class OperadorServiceImpl implements OperadorService {

	@Autowired
	private OperadorRepository repository;

	@Override
	public List<Operador> getAllUsuarios() {
		return (List<Operador>) repository.findAll();
	}
	
	
	
}
