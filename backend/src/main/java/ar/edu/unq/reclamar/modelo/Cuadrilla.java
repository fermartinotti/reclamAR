package ar.edu.unq.reclamar.modelo;

import javax.persistence.Column;
import javax.persistence.Entity;

import org.springframework.data.jpa.domain.AbstractPersistable;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties(value = {"new"})
public class Cuadrilla extends AbstractPersistable<Long> {
	
	private static final long serialVersionUID = 1L;
	
	@Column
	Integer cantIntegrantes; 
	
	@Column
	boolean estaDisponible = true;
	
	@Column 
	String nombre;
	
	public boolean isEstaDisponible() {
		return estaDisponible;
	}
	public void setEstaDisponible(boolean estaDisponible) {
		this.estaDisponible = estaDisponible;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
			
	public Cuadrilla() {}	
	
	public Cuadrilla(Integer cantIntegrantes, String nombre) {
		this.cantIntegrantes = cantIntegrantes;
		this.nombre= nombre;
	}
}
