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
	
	@JoinColumn(name="reclamosAsignados")
	@OneToMany(fetch = FetchType.EAGER )
	Set<Reclamo> reclamosAsignados = new HashSet<Reclamo>();
	
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
	
	public Set<Reclamo> getReclamosAsignados() {
		return reclamosAsignados;
	}
	public void setReclamosAsignados(Set<Reclamo> reclamosAsignados) {
		this.reclamosAsignados = reclamosAsignados;
	}

	public Cuadrilla() {}	
	
	public Cuadrilla(int cantIntegrantes, String nombre) {
		this.cantIntegrantes = cantIntegrantes;
		this.nombre= nombre;
	}
}
