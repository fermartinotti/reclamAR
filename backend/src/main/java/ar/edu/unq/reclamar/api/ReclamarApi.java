package ar.edu.unq.reclamar.api;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.apache.cxf.rs.security.cors.CrossOriginResourceSharing;

import ar.edu.unq.reclamar.modelo.Reclamo;

@Path("/rest")
@CrossOriginResourceSharing(allowAllOrigins = true, allowCredentials = false, 
exposeHeaders = {"Access-Control-Allow-Headers",
	        "Origin", "Content-Type", "X-Requested-With", "accept", 
	        "Access-Control-Request-Method", "Access-Control-Request-Headers", "Authorization"},
allowHeaders = {"Access-Control-Allow-Headers",
	        "Origin", "Content-Type", "X-Requested-With", "accept", 
	        "Access-Control-Request-Method", "Access-Control-Request-Headers", "Authorization"})
public interface ReclamarApi {

	@GET
    @Path("/isAlive")
    Response isAlive();
	
	@GET
	@Path("/usuarios")
	@Produces(MediaType.APPLICATION_JSON)
	Response usuarios();

	@GET
	@Path("/reclamos")
	@Produces(MediaType.APPLICATION_JSON)
//	@Consumes({"application/octet-stream", "text/xml", "application/xml"})
	Response reclamos();
	
	@POST
	@Path("/reclamos")
	@Produces(MediaType.APPLICATION_JSON)
	Response agregarReclamo(Reclamo reclamo);
	
	@POST
	@Path("/cuadrillas")
	@Produces(MediaType.APPLICATION_JSON)
	Response agregarCuadrilla(Integer cantEmpleados);
	
	@GET
	@Path("/cuadrillas")
	@Produces(MediaType.APPLICATION_JSON)
	Response getCuadrillas();
	
	@GET
	@Path("/reclamos/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	Response getReclamoById(@PathParam("id") Long id);	
	
	@GET
	@Path("/reclamos/todos")
	@Produces(MediaType.APPLICATION_JSON)
	Response getTodosLosReclamos();
	
	@POST
	@Path("/reclamos/asignarCuadrilla")
	@Produces(MediaType.APPLICATION_JSON)
	Response asignarCuadrilla(Reclamo reclamo);
}
