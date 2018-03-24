package ar.edu.unq.reclamar.api;

import javax.ws.rs.core.Response;

import org.springframework.stereotype.Service;

@Service
public class ReclamarApiImpl implements ReclamarApi {

	@Override
	public Response isAlive() {
		return Response.ok().build();
	}

}
