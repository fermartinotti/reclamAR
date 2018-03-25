package ar.edu.unq.reclamar.api;

import javax.ws.rs.core.Response;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ar.edu.unq.reclamar.service.OperadorService;
import ar.edu.unq.reclamar.service.ReclamoService;

@Service
public class ReclamarApiImpl implements ReclamarApi {
	
	@Autowired
	private ReclamoService reclamoService;
	
	@Autowired
	private OperadorService operadorService;
	
	@Override
	public Response isAlive() {
		return Response.ok().build();
	}

	@Override
	public Response reclamos() {
		return Response.ok(reclamoService.misReclamos()).build();
	}

	@Override
	public Response usuarios() {
		return Response.ok(operadorService.getAllUsuarios()).build();
	}


}
