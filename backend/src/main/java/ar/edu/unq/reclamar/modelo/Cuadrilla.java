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
	int cantIntegrantes; 
	
	@Column 
	String nombre;
	
	public int getCantIntegrantes() {
		return cantIntegrantes;
	}
	public void setCantIntegrantes(int cantIntegrantes) {
		this.cantIntegrantes = cantIntegrantes;
	}
	
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
			
	public Cuadrilla() {}	
	
	public Cuadrilla(int cantIntegrantes, String nombre) {
		this.cantIntegrantes = cantIntegrantes;
		this.nombre= nombre;
	}
}
