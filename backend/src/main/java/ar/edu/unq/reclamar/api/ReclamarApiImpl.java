package ar.edu.unq.reclamar.api;

import java.net.URI;
import java.util.Optional;

import javax.ws.rs.core.Response;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import ar.edu.unq.reclamar.modelo.Reclamo;
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

	@Override
	public Response agregarReclamo(Reclamo reclamo) {
		reclamoService.agregarReclamo(reclamo);
		
//		URI location  = ServletUriComponentsBuilder.fromCurrentRequest()
//				.path("/{id}")
//				.buildAndExpand(reclamo.getId()).toUri();
				
//		return Response.created(location).build();
		
		return Response.ok(reclamo).build();
	}

	@Override
	public Response getReclamoById(Long id) {
		Optional<Reclamo> reclamo = reclamoService.getReclamo(id);
		
		if(reclamo.isPresent()) {
			return Response.ok(reclamo.get()).build();
		}else {
			return Response.status(404).build();
		}
	}


}
