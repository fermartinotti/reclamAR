package ar.edu.unq.reclamar.modelo;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import org.springframework.data.jpa.domain.AbstractPersistable;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

import ar.edu.unq.reclamar.utils.MiLocalDateTimeSerializer;

@Entity
@JsonIgnoreProperties(value = {"new"})
public class Ticket extends AbstractPersistable<Long>{

	@JoinColumn(name="autorTicket")
    @ManyToOne(fetch = FetchType.EAGER)
	Operador autor;
	
	@Column
	@JsonSerialize(using= MiLocalDateTimeSerializer.class)
	LocalDateTime fechaDeCreacion = LocalDateTime.now();
	
	@JoinColumn(name="reclamoDeTicket")
    @ManyToOne(fetch = FetchType.EAGER)
	Reclamo reclamo;
	
	@Column
	String motivo;
	
	@Column
	String detalle;
	
	@Column
	String respuesta;

	public Operador getAutor() {
		return autor;
	}

	public void setAutor(Operador autor) {
		this.autor = autor;
	}

	public LocalDateTime getFechaDeCreacion() {
		return fechaDeCreacion;
	}

	public void setFechaDeCreacion(LocalDateTime fechaDeCreacion) {
		this.fechaDeCreacion = fechaDeCreacion;
	}

	public Reclamo getReclamo() {
		return reclamo;
	}

	public void setReclamo(Reclamo reclamo) {
		this.reclamo = reclamo;
	}

	public String getMotivo() {
		return motivo;
	}

	public void setMotivo(String motivo) {
		this.motivo = motivo;
	}

	public String getDetalle() {
		return detalle;
	}

	public void setDetalle(String detalle) {
		this.detalle = detalle;
	}

	public String getRespuesta() {
		return respuesta;
	}

	public void setRespuesta(String respuesta) {
		this.respuesta = respuesta;
	}
	
	public Ticket() {}
	
	public Ticket(Reclamo reclamo, Operador autor, String motivo, String detalle) {
		this.reclamo = reclamo;
		this.autor = autor;
		this.motivo = motivo;
		this.detalle = detalle; 
	}
	
	
}
