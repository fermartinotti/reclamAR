package ar.edu.unq.reclamar.api;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
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
	Response reclamos();
}
