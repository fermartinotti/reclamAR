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
import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import com.fasterxml.jackson.annotation.JsonSubTypes.Type;

@Entity
@JsonIgnoreProperties(value = {"new"})
@JsonTypeInfo(use = JsonTypeInfo.Id.NAME, include = JsonTypeInfo.As.PROPERTY, property = "type")
@JsonSubTypes({
	@Type(value = Operador.class, name ="Operador"),
	@Type(value = Admin.class, name= "Admin")	
	}
)
public abstract class Usuario extends AbstractPersistable<Long>{

	private static final long serialVersionUID = 1L;
	
	@Column
	String nombre;
	
	@Column
	String apellido;
	
	@Column
	String email;
	
	@Column
	@JsonIgnore
	String subId;
	
	@Column
	boolean esAdmin;
	
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
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public boolean isEsAdmin() {
		return esAdmin;
	}
	public void setEsAdmin(boolean esAdmin) {
		this.esAdmin = esAdmin;
	}	
	
}

