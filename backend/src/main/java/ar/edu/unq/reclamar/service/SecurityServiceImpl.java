package ar.edu.unq.reclamar.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ar.edu.unq.reclamar.modelo.Operador;
import ar.edu.unq.reclamar.repository.OperadorRepository;

@Service
public class SecurityServiceImpl implements SecurityService {

	@Autowired
	OperadorRepository usuarioRepository;

	@Override
	public Operador getOperadorLogeado() {
		return usuarioRepository.findOne(1L);
	}
	


}
