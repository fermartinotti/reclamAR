package ar.edu.unq.reclamar.modelo;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties(value = {"new" , "id"})
public class EnReparacion extends Estado {

	private static final long serialVersionUID = 1L;
	
	@Column
	public LocalDate fechaDeReparacion;
	
	public LocalDate getFechaDeReparacion() {
		return fechaDeReparacion;
	}
	public void setFechaDeReparacion(LocalDate fechaDeReparacion) {
		this.fechaDeReparacion = fechaDeReparacion;
	}

	public EnReparacion() {}
	
	public EnReparacion(LocalDate fechaDeReparacion) {
		super();
		this.fechaDeReparacion = fechaDeReparacion;
	}	
}
