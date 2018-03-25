package ar.edu.unq.reclamar.modelo;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import org.springframework.data.jpa.domain.AbstractPersistable;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;


import ar.edu.unq.reclamar.utils.Localizacion;
import ar.edu.unq.reclamar.utils.MiLocalDateSerializer;

@Entity
@JsonIgnoreProperties(value = {"new"})
public class Reclamo  extends AbstractPersistable<Long>{

	@JoinColumn(name="autor")
    @ManyToOne(fetch = FetchType.EAGER)
	@JsonIgnore
	Operador autor;
	
	@Column
	@JsonSerialize(using= MiLocalDateSerializer.class)
	LocalDate fechaDeCreacion;
	
	@Column
	String detalle;
	
	@JoinColumn(name="estado")
	@ManyToOne()
	Estado estado;
	
	@JoinColumn(name="tipoReclamo")
	@ManyToOne(fetch = FetchType.EAGER)
	TipoDeReclamo tipoDeReclamo;
	
	@JoinColumn(name="lugarDeIncidente")
	@ManyToOne(fetch = FetchType.EAGER)
	Localizacion lugarDeIncidente;
	
	public Reclamo() {};
	
	public Reclamo(Operador autor, String mensaje) {
	
		this.autor = autor;
		this.fechaDeCreacion = LocalDate.now();
		this.detalle = mensaje;
	}
		
	public Operador getAutor() {
		return autor;
	}
	public void setAutor(Operador autor) {
		this.autor = autor;
	}
	public LocalDate getFechaDeCreacion() {
		return fechaDeCreacion;
	}
	public void setFechaDeCreacion(LocalDate fechaDeCreacion) {
		this.fechaDeCreacion = fechaDeCreacion;
	}
	public String getDetalle() {
		return detalle;
	}
	public void setDetalle(String detalle) {
		this.detalle = detalle;
	}
	public Estado getEstado() {
		return estado;
	}
	public void setEstado(Estado estado) {
		this.estado = estado;
	}
	public TipoDeReclamo getTipoDeReclamo() {
		return tipoDeReclamo;
	}
	public void setTipoDeReclamo(TipoDeReclamo tipoDeReclamo) {
		this.tipoDeReclamo = tipoDeReclamo;
	}
	public Localizacion getLugarDeIncidente() {
		return lugarDeIncidente;
	}
	public void setLugarDeIncidente(Localizacion lugarDeIncidente) {
		this.lugarDeIncidente = lugarDeIncidente;
	}
	
	
}
