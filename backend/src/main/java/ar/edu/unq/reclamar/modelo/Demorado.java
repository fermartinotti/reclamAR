package ar.edu.unq.reclamar.modelo;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties(value = {"new" , "id"})
public class Demorado extends Estado {
	
	private static final long serialVersionUID = 1L;

	@Column
	public String motivo;
	
	@Column
	public LocalDate nuevaFecha;
	
	public Demorado() {}
	
	public Demorado(LocalDate fecha, String motivo){
		this.motivo = motivo;
		this.nuevaFecha = fecha;
	}

	public String getMotivo() {
		return motivo;
	}

	public void setMotivo(String motivo) {
		this.motivo = motivo;
	}

	public LocalDate getNuevaFecha() {
		return nuevaFecha;
	}

	public void setNuevaFecha(LocalDate nuevaFecha) {
		this.nuevaFecha = nuevaFecha;
	}

	
}
