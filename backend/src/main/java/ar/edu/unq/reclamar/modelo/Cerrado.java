package ar.edu.unq.reclamar.modelo;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties(value = {"new" , "id"})
public class Cerrado extends Estado {

	@Column
	public String comentario;
	
	@Column
	public LocalDate fechaFinalizacion;
	
	public Cerrado() {}
	
	public Cerrado(String comentario, LocalDate fechaFinalizacion) {
		this.comentario = comentario;
		this.fechaFinalizacion = fechaFinalizacion;
		
	}

	public String getComentario() {
		return comentario;
	}

	public void setComentario(String comentario) {
		this.comentario = comentario;
	}

	public LocalDate getFechaFinalizacion() {
		return fechaFinalizacion;
	}

	public void setFechaFinalizacion(LocalDate fechaFinalizacion) {
		this.fechaFinalizacion = fechaFinalizacion;
	}
	
	
}
