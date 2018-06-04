package ar.edu.unq.reclamar.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ar.edu.unq.reclamar.modelo.Admin;
import ar.edu.unq.reclamar.repository.AdminRepository;

@Service
public class AdminServiceImpl implements AdminService {

	@Autowired
	private AdminRepository repository;
	
	@Override
	public List<Admin> getAllAdmin() {
		return (List<Admin>) repository.findAll();
	}

}
