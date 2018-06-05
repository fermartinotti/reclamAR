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
@JsonIgnoreProperties(value = {"new", "id"})
public class Operador extends Usuario {

	private static final long serialVersionUID = 1L;

	@JoinColumn(name="reclamos")
	@OneToMany(fetch=FetchType.EAGER)
	@JsonIgnore
	Set<Reclamo> reclamos = new HashSet<Reclamo>();
	
	public Set<Reclamo> getReclamos() {
		return reclamos;
	}
	public void setReclamos(Set<Reclamo> reclamos) {
		this.reclamos = reclamos;
	}
	
	public Operador(){
		this.setEsAdmin(false);
	}
	
	public Operador(String subId) {
		this.subId = subId;
	}
}