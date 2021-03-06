package ar.edu.unq.reclamar.modelo;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collections;
import java.util.LinkedList;
import java.util.List;
import java.util.Set;
import java.util.Stack;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import org.springframework.data.jpa.domain.AbstractPersistable;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

import ar.edu.unq.reclamar.exceptions.DatoInvalidoException;
import ar.edu.unq.reclamar.utils.Localizacion;
import ar.edu.unq.reclamar.utils.MiLocalDateTimeSerializer;

@Entity
@JsonIgnoreProperties(value = {"new"})
public class Reclamo  extends AbstractPersistable<Long>{

	private static final long serialVersionUID = 1L;

	@JoinColumn(name="autor")
    @ManyToOne(fetch = FetchType.EAGER)
	Usuario autor;
	
	@Column
	@JsonSerialize(using= MiLocalDateTimeSerializer.class)
	LocalDateTime fechaDeCreacion;
	
	@Column
	String detalle;
	
	@JoinColumn(name="estado")
	@ManyToOne()
	Estado estado;
	
	@OneToMany(fetch = FetchType.EAGER)
	@JoinColumn(name="estados")
	List<Estado> estados = new ArrayList<>();
	
	@JoinColumn(name="tipoDeReclamo")
	@ManyToOne(fetch = FetchType.EAGER)
	TipoDeReclamo tipoDeReclamo;
	
	@JoinColumn(name="lugarDeIncidente")
	@ManyToOne(fetch = FetchType.EAGER)
	Localizacion lugarDeIncidente;
	
	@Column
	int puntuacion;
	
	@Column
	String direccionFisica;
	
	public String getDireccionFisica() {
		return direccionFisica;
	}

	public void setDireccionFisica(String direccionFisica) {
		this.direccionFisica = direccionFisica;
	}

	public Reclamo() {};
	
	public Reclamo(Usuario autor, String mensaje) {
	
		this.autor = autor;
		this.fechaDeCreacion = LocalDateTime.now();
		this.detalle = mensaje;
		this.puntuacion= 0;
	}
		
	public Usuario getAutor() {
		return autor;
	}
	
	public void setAutor(Usuario userLogeado) {
		this.autor = userLogeado;
	}
	
	public LocalDateTime getFechaDeCreacion() {
		return fechaDeCreacion;
	}
	
	public void setFechaDeCreacion(LocalDateTime fechaDeCreacion) {
		this.fechaDeCreacion = fechaDeCreacion;
	}
	
	public String getDetalle() {
		return detalle;
	}
	
	public void setDetalle(String detalle) throws DatoInvalidoException {
		if(detalle == null || detalle.isEmpty()) {
			throw new DatoInvalidoException("El detalle no ha sido ingresado");
		}
		
		if(detalle.length() > 250) {
			throw new DatoInvalidoException("El detalle solo puede tener 250 caracteres");
		}
		
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
	
	public void setLugarDeIncidente(Localizacion lugarDeIncidente) throws DatoInvalidoException {
		if(lugarDeIncidente == null) {
			throw new DatoInvalidoException("El lugar del incidente no puede ser null");
		}
		
		this.lugarDeIncidente = lugarDeIncidente;
	}

	public List<Estado> getEstados() {
		return estados;
	}

	public void setEstados(List<Estado> estados) {
		this.estados = estados;
	}

	public int getPuntuacion() {
		return puntuacion;
	}

	public void setPuntuacion(int puntuacion) {
		this.puntuacion = puntuacion;
	}
	
}
