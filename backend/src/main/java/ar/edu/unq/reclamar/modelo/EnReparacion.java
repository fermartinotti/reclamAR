package ar.edu.unq.reclamar.modelo;

import javax.persistence.Column;
import javax.persistence.Entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties(value = {"new" , "id"})
public class EnReparacion extends Estado {

	private static final long serialVersionUID = 1L;
	
	@Column
	public String fechaDeReparacion;

	public EnReparacion() {}
	
	public EnReparacion(String fechaReparacion) {
		this.fechaDeReparacion =fechaReparacion;
	}

	public String getFechaDeReparacion() {
		return fechaDeReparacion;
	}

	public void setFechaDeReparacion(String fechaDeReparacion) {
		this.fechaDeReparacion = fechaDeReparacion;
	}
	
	
}
