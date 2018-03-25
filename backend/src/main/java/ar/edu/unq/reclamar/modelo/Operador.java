package ar.edu.unq.reclamar.modelo;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

import org.springframework.data.jpa.domain.AbstractPersistable;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import ar.edu.unq.reclamar.utils.Localizacion;
import ar.edu.unq.reclamar.utils.Telefono;

@Entity
@JsonIgnoreProperties(value = {"new"})
public class Operador extends AbstractPersistable<Long>{


	@JoinColumn(name="reclamos")
	@OneToMany(fetch=FetchType.EAGER)
	List<Reclamo> reclamos = new ArrayList<Reclamo>();
	
	@Column
	String nombre;
	
	@Column
	String apellido;
	
//	Telefono telefono;
	
	public Operador(){};
	
	public List<Reclamo> getReclamos() {
		return reclamos;
	}
	public void setReclamos(List<Reclamo> reclamos) {
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
	
	
}
