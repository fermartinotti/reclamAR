package ar.edu.unq.reclamar.api;

import java.util.Optional;

import javax.ws.rs.core.Response;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

import ar.edu.unq.reclamar.dto.AsignarCuadrillaDTO;
import ar.edu.unq.reclamar.dto.CerrarReclamoDTO;
import ar.edu.unq.reclamar.dto.PuntuacionReclamoDTO;
import ar.edu.unq.reclamar.dto.ReabrirReclamoDTO;
import ar.edu.unq.reclamar.dto.ReprogramarReclamoDTO;
import ar.edu.unq.reclamar.modelo.Cuadrilla;
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
	public Response usuarios() {
		return Response.ok(usuarioService.getAllUsuarios()).build();
	}

	@Override
	public Response usuarioLogueado() {
		return Response.ok(securityService.setUsuarioLogueado()).build();
	}

	@Override
	public Response reclamos() {
		securityService.setUsuarioLogueado();
		return Response.ok(reclamoService.misReclamos()).build();
	}

	@Override
	public Response getReclamoById(Long id) {
		Optional<Reclamo> reclamo = reclamoService.getReclamo(id);

		if (reclamo.isPresent()) {
			return Response.ok(reclamo.get()).build();
		} else {
			return Response.status(404).build();
		}
	}

	@Override
	public Response getTodosLosReclamos() {
		return Response.ok(reclamoService.todosLosReclamos()).build();
	}

	@Override
	public Response agregarReclamo(Reclamo reclamo) {
		securityService.setUsuarioLogueado();
		ObjectNode objectNode = new ObjectMapper().createObjectNode();
		try {
			reclamoService.agregarReclamo(reclamo);
			return Response.ok(reclamo).build();
		} catch (Exception e) {
			e.printStackTrace();
			objectNode.put("Error", e.getMessage());
			return Response.status(500).entity(objectNode.toString()).build();
		}
	}

	@Override
	public Response getCuadrillas() {
		securityService.setUsuarioLogueado();
		return Response.ok(cuadrillaService.todasLasCuadrillas()).build();
	}

	@Override
	public Response agregarCuadrilla(Cuadrilla cuadrilla) {
		securityService.setUsuarioLogueado();
		ObjectNode objectNode = new ObjectMapper().createObjectNode();
		try {
			;
			return Response.ok(cuadrillaService.crearCuadrilla(cuadrilla)).build();
		} catch (Exception e) {
			e.printStackTrace();
			objectNode.put("Error", e.getMessage());
			return Response.status(500).entity(objectNode.toString()).build();
		}
	}

	@Override
	public Response asignarCuadrilla(AsignarCuadrillaDTO prueba) {
		securityService.setUsuarioLogueado();
		ObjectNode objectNode = new ObjectMapper().createObjectNode();

		try {
			reclamoService.asignacionCuadrilla(prueba);
			return Response.ok().build();
		} catch (Exception e) {
			e.printStackTrace();
			objectNode.put("Error", e.getMessage());
			return Response.status(500).entity(objectNode.toString()).build();
		}
	}

	@Override
	public Response finalizarReclamo(CerrarReclamoDTO cerrar) {
		securityService.setUsuarioLogueado();
		ObjectNode objectNode = new ObjectMapper().createObjectNode();

		try {
			reclamoService.finalizarReclamo(cerrar);
			return Response.ok().build();
		} catch (Exception e) {
			e.printStackTrace();
			objectNode.put("Error", e.getMessage());
			return Response.status(500).entity(objectNode.toString()).build();
		}
	}

	@Override
	public Response reabrirReclamo(ReabrirReclamoDTO reabrir) {
		securityService.setUsuarioLogueado();
		ObjectNode objectNode = new ObjectMapper().createObjectNode();

		try {
			reclamoService.reabrirReclamo(reabrir);
			return Response.ok().build();
		} catch (Exception e) {
			e.printStackTrace();
			objectNode.put("Error", e.getMessage());
			return Response.status(500).entity(objectNode.toString()).build();
		}
	}

	@Override
	public Response puntuarReclamo(PuntuacionReclamoDTO puntuar) {
		securityService.setUsuarioLogueado();
		ObjectNode objectNode = new ObjectMapper().createObjectNode();

		try {
			reclamoService.puntuarReclamo(puntuar);
			return Response.ok().build();
		} catch (RuntimeException e) {
			e.printStackTrace();
			objectNode.put("Error", e.getMessage());
			return Response.status(Response.Status.BAD_REQUEST).entity(objectNode.toString()).build();
		}
	}

	@Override
	public Response eliminarCuadrilla(Long idCuadrilla) {
		securityService.setUsuarioLogueado();
		ObjectNode objectNode = new ObjectMapper().createObjectNode();
		try {
			cuadrillaService.eliminarCuadrilla(idCuadrilla);
			return Response.ok().build();
		} catch (Exception e) {
			e.printStackTrace();
			objectNode.put("Error", e.getMessage());
			return Response.status(500).entity(objectNode.toString()).build();
		}
	}
	
	@Override
	public Response getCuadrillasById(Long id) {
		Optional<Cuadrilla> cuadrilla = cuadrillaService.getCuadrilla(id);

		if (cuadrilla.isPresent()) {
			return Response.ok(cuadrilla.get()).build();
		} else {
			return Response.status(404).build();
		}
	}

	@Override
	public Response reprogramarReclamo(ReprogramarReclamoDTO reprogramarR) {
		securityService.setUsuarioLogueado();
		ObjectNode objectNode = new ObjectMapper().createObjectNode();
		try {
			reclamoService.reprogramarReclamo(reprogramarR);
			return Response.ok().build();
		} catch (Exception e) {
			e.printStackTrace();
			objectNode.put("Error", e.getMessage());
			return Response.status(500).entity(objectNode.toString()).build();
		}
	}


}
