package ar.edu.unq.reclamar.modelo;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

import org.springframework.data.jpa.domain.AbstractPersistable;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties(value = {"new"})
public class Usuario extends AbstractPersistable<Long>{

	private static final long serialVersionUID = 1L;

	@JoinColumn(name="reclamos")
	@OneToMany(fetch=FetchType.EAGER)
	@JsonIgnore
	Set<Reclamo> reclamos = new HashSet<Reclamo>();
	
	@Column
	String nombre;
	
	@Column
	String apellido;
	
	@Column
	String subId;
	
//	Telefono telefono;
	
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
	
	public boolean hayCuadrillaDisponible() {
		for(Cuadrilla c : cuadrillas) {
			if(!c.isEstaDisponible()) {
				return false;
			}
		}
		return true;
	}
	
	public void asignarCuadrilla(Reclamo reclamo) {
		for(Cuadrilla c : cuadrillas) {
			if(c.isEstaDisponible()) {
				reclamo.setCuadrilla(c);
				c.setEstaDisponible(false);
				break;
			}
		}
	}
	
	public Usuario(){};
	
	public Usuario(String subId) {
		this.subId = subId;
	}
	
	public Set<Reclamo> getReclamos() {
		return reclamos;
	}
	public void setReclamos(Set<Reclamo> reclamos) {
		this.reclamos = reclamos;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getApellido() {
		return apellido;
	}
	public void setApellido(String apellido) {
		this.apellido = apellido;
	}
	public String getSubId() {
		return subId;
	}
	public void setSubId(String subId) {
		this.subId = subId;
	}	
}

