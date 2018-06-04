package ar.edu.unq.reclamar.api;

import java.util.Optional;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.core.Response;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ar.edu.unq.reclamar.modelo.Reclamo;
import ar.edu.unq.reclamar.service.AdminService;
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
	private AdminService adminService;
	
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
		System.out.println(token);
		securityService.setUsuarioLogueado(token);
		return Response.ok(reclamoService.misReclamos()).build();
	}
	
	@Override
	public Response getCuadrillas(){
		String token = request.getHeader("Authorization");
		System.out.println(token);
		securityService.setAdminLogueado(token);
		return Response.ok(cuadrillaService.todasLasCuadrillas()).build();
	}

	@Override
	public Response usuarios() {
		return Response.ok(usuarioService.getAllUsuarios()).build();
	}

	@Override
	public Response agregarReclamo(Reclamo reclamo) {
		String token = request.getHeader("Authorization");
		System.out.println(token);
		securityService.setUsuarioLogueado(token);
		try {
			reclamoService.agregarReclamo(reclamo);			
			return Response.ok(reclamo).build();
		}catch(Exception e) {
			return Response.status(500).build();
		}		
	}
	
	@Override
	public Response agregarCuadrilla(Integer cantEmpleados) {
		String token = request.getHeader("Authorization");
		System.out.println(token);
		securityService.setAdminLogueado(token);
		try {
			cuadrillaService.crearCuadrilla(cantEmpleados);		
			return Response.ok().build();
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

	@Override
	public Response asignarCuadrilla(Reclamo reclamo) {
		String token = request.getHeader("Authorization");
		System.out.println(token);
		securityService.setUsuarioLogueado(token);
		try {
			reclamoService.agregarReclamo(reclamo);			
			return Response.ok(reclamo).build();
		}catch(Exception e) {
			return Response.status(500).build();
		}	
	}


}
