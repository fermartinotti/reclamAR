package ar.edu.unq.reclamar.api;

import java.util.Optional;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.HeaderParam;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.Response;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestHeader;

import com.auth0.jwt.interfaces.DecodedJWT;

import ar.edu.unq.reclamar.modelo.Reclamo;
import ar.edu.unq.reclamar.service.OperadorService;
import ar.edu.unq.reclamar.service.ReclamoService;
import ar.edu.unq.reclamar.service.SecurityService;

@Service
public class ReclamarApiImpl implements ReclamarApi {
	
	@Autowired
	private ReclamoService reclamoService;
	
	@Autowired
	private OperadorService operadorService;
	
	@Autowired
	private HttpServletRequest request;
	
	@Autowired
	private SecurityService securityService;
	
	@Override
	public Response isAlive() {
		return Response.ok().build();
	}

	@Override
	public Response reclamos(){
		String token = request.getHeader("Authorization");
		securityService.setUsuarioLogueado(token);
		return Response.ok(reclamoService.misReclamos()).build();
	}

	@Override
	public Response usuarios() {
		return Response.ok(operadorService.getAllUsuarios()).build();
	}

	@Override
	public Response agregarReclamo(Reclamo reclamo) {
		String token = request.getHeader("Authorization");
		securityService.setUsuarioLogueado(token);
		try {
			reclamoService.agregarReclamo(reclamo);			
			return Response.ok(reclamo).build();
		}catch(Exception e) {
			return Response.status(500).build();
		}		
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

	@Override
	public Response getTodosLosReclamos() {
		return Response.ok(reclamoService.todosLosReclamos()).build();
	}


}
