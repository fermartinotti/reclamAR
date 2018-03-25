package ar.edu.unq.reclamar.api;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.apache.cxf.rs.security.cors.CrossOriginResourceSharing;

@Path("/rest")
@CrossOriginResourceSharing(allowAllOrigins = true)
public interface ReclamarApi {

	@GET
    @Path("/isAlive")
    Response isAlive();
	
	@GET
	@Path("/reclamos")
	@Produces(MediaType.APPLICATION_JSON)
	Response reclamos();
	
	@GET
	@Path("/usuarios")
	@Produces(MediaType.APPLICATION_JSON)
	Response usuarios();
	
	
}
