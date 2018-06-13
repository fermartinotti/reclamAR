package ar.edu.unq.reclamar.modelo;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

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
	
	@OneToMany(fetch = FetchType.EAGER)
	@JoinColumn(name="reclamos")
	Set<Reclamo> reclamos = new HashSet<Reclamo>();
	
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
	public Set<Reclamo> getReclamos() {
		return reclamos;
	}
	public void setReclamos(Set<Reclamo> reclamos) {
		this.reclamos = reclamos;
	}
	public Cuadrilla() {}	
	
	public Cuadrilla(int cantIntegrantes, String nombre) {
		this.cantIntegrantes = cantIntegrantes;
		this.nombre= nombre;
	}
}
