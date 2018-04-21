package ar.edu.unq.reclamar;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

import java.time.LocalDateTime;

import org.junit.Test;

import ar.edu.unq.reclamar.builders.BuilderLuminaria;
import ar.edu.unq.reclamar.modelo.Abierto;
import ar.edu.unq.reclamar.modelo.Luminaria;
import ar.edu.unq.reclamar.modelo.Reclamo;

public class TestReclamo {

	
	
	@Test
	public void testGenerarReclamo() {
		Luminaria luminaria = new BuilderLuminaria().createObject();
		Reclamo reclamo = new Reclamo(null, "detalle");
		reclamo.setEstado(new Abierto());
		reclamo.setTipoDeReclamo(luminaria);
		
				
		assertEquals(luminaria, reclamo.getTipoDeReclamo());
		assertNotNull(reclamo.getDetalle());
	}

}
