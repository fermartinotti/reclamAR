package ar.edu.unq.reclamar.modelo;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties(value = {"new"})
public class Admin extends Usuario {

	private static final long serialVersionUID = 1L;
	
	@JoinColumn(name="cuadrillas")
	@OneToMany(fetch=FetchType.EAGER)
	@JsonIgnore
	Set<Cuadrilla> cuadrillas = new HashSet<Cuadrilla>();
	
	public Set<Cuadrilla> getCuadrillas() {
		return cuadrillas;
	}
	public void setCuadrillas(Set<Cuadrilla> cuadrillas) {
		this.cuadrillas = cuadrillas;
	}
	
	public Admin() {
		super();
	}
	
	public Admin(String subId) {
		super(subId);
	}	
}