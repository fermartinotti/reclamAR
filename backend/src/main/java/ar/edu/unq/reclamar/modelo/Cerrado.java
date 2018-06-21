package ar.edu.unq.reclamar.modelo;

import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

import ar.edu.unq.reclamar.utils.LocalDateSerializer;
import ar.edu.unq.reclamar.utils.MiLocalDateTimeSerializer;

@Entity
@JsonIgnoreProperties(value = {"new" , "id"})
public class Cerrado extends Estado {

	private static final long serialVersionUID = 1L;

	@Column
	@JsonIgnore
	public String comentario;
	
	@Column
	@JsonSerialize(using= LocalDateSerializer.class)
	public LocalDateTime fechaFinalizacion;
	
	public Cerrado() {}
	
	public Cerrado(String comentario, LocalDateTime fechaFinalizacion) {
		this.comentario = comentario;
		this.fechaFinalizacion = fechaFinalizacion;
		
	}

	public String getComentario() {
		return comentario;
	}

	public void setComentario(String comentario) {
		this.comentario = comentario;
	}

	public LocalDateTime getFechaFinalizacion() {
		return fechaFinalizacion;
	}

	public void setFechaFinalizacion(LocalDateTime fechaFinalizacion) {
		this.fechaFinalizacion = fechaFinalizacion;
	}
	
	
}
