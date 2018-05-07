package ar.edu.unq.reclamar.utils;

import javax.persistence.Entity;

import org.springframework.data.jpa.domain.AbstractPersistable;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties(value = {"new"})
public class Localizacion  extends AbstractPersistable<Long> {
	
	private static final long serialVersionUID = 1L;
	
	String latitud;
	String longitud;
	String direccionFisica; 
	
	public String getLatitud() {
		return latitud;
	}
	public void setLatitud(String latitud) {
		this.latitud = latitud;
	}
	public String getLongitud() {
		return longitud;
	}
	public void setLongitud(String longitud) {
		this.longitud = longitud;
	}
	public String getDireccionFisica() { 
		return direccionFisica; 
	} 
	public void setDireccionFisica(String direccionFisica) { 
		this.direccionFisica = direccionFisica; 
	} 
}
