package ar.edu.unq.reclamar.modelo;

import javax.persistence.Column;
import javax.persistence.Entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties(value = {"new", "id"})
public class Arboleda extends TipoDeReclamo{
	
	private static final long serialVersionUID = 1L;
	
	@Column
	public boolean problemaPoda;
	
	@Column
	public boolean problemaCaida;

	
	public boolean isProblemaPoda() {
		return problemaPoda;
	}

	public void setProblemaPoda(boolean problemaPoda) {
		this.problemaPoda = problemaPoda;
	}

	public boolean isProblemaCaida() {
		return problemaCaida;
	}

	public void setProblemaCaida(boolean problemaCaida) {
		this.problemaCaida = problemaCaida;
	}
	
	public Arboleda() {}
	

}
