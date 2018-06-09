package ar.edu.unq.reclamar.api;

import java.util.Optional;

import javax.ws.rs.core.Response;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ar.edu.unq.reclamar.modelo.Cuadrilla;
import ar.edu.unq.reclamar.modelo.Prueba;
import ar.edu.unq.reclamar.modelo.Reclamo;
import ar.edu.unq.reclamar.service.CuadrillaService;
import ar.edu.unq.reclamar.service.ReclamoService;
import ar.edu.unq.reclamar.service.SecurityService;
import ar.edu.unq.reclamar.service.UsuarioService;

@Service
public class ReclamarApiImpl implements ReclamarApi {
	
	@Autowired
	private ReclamoService reclamoService;
	
	@Autowired
	private CuadrillaService cuadrillaService;
	
	@Autowired
	private UsuarioService usuarioService;
	
	@Autowired
	private SecurityService securityService;
	
	@Override
	public Response isAlive() {
		return Response.ok().build();
	}

	@Override
	public Response reclamos(){
		securityService.setUsuarioLogueado();
		return Response.ok(reclamoService.misReclamos()).build();
	}

	@Override
	public Response usuarios() {
		return Response.ok(usuarioService.getAllUsuarios()).build();
	}

	@Override
	public Response agregarReclamo(Reclamo reclamo) {
		securityService.setUsuarioLogueado();
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
	public Response getCuadrillas(){
		securityService.setUsuarioLogueado();
		return Response.ok(cuadrillaService.todasLasCuadrillas()).build();
	}
	
	@Override
	public Response agregarCuadrilla(Cuadrilla cuadrilla) {
		securityService.setUsuarioLogueado();
		try {
			cuadrillaService.crearCuadrilla(cuadrilla);		
			return Response.ok().build();
		}catch(Exception e) {
			return Response.status(500).build();
		}		
	}


	@Override
	public Response getTodosLosReclamos() {
		return Response.ok(reclamoService.todosLosReclamos()).build();
	}

//	@Override
//	public Response asignarCuadrilla(Reclamo reclamo, Cuadrilla cuadrilla, LocalDate fechaTerminacion) {
//		securityService.setUsuarioLogueado();
//		try {
//			reclamoService.asignacionCuadrilla(reclamo, cuadrilla, fechaTerminacion);			
//			return Response.ok(reclamo).build();
//		}catch(Exception e) {
//			return Response.status(500).build();
//		}	
//	}
	
	@Override
	public Response asignarCuadrilla(Prueba prueba) {
		securityService.setUsuarioLogueado();
		try {
			reclamoService.asignacionCuadrilla(prueba);			
			return Response.ok().build();
		}catch(Exception e) {
			return Response.status(500).build();
		}	
	}

	@Override
	public Response login() {
		securityService.setUsuarioLogueado();
		return Response.ok().build();
	}

	@Override
	public Response usuarioLogueado() {
		return Response.ok(securityService.getUsuarioLogeado()).build();
	}

	@Override
	public Response finalizarReclamo(Reclamo reclamo, String comentario) {
		securityService.setUsuarioLogueado();
		
		try {
			reclamoService.finalizarReclamo(reclamo, comentario);		
			return Response.ok(reclamo).build();
		}catch(Exception e) {
			return Response.status(500).build();
		}
	}
}
