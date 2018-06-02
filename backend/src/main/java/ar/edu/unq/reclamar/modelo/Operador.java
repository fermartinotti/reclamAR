package ar.edu.unq.reclamar.modelo;

import javax.persistence.Entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


@Entity
@JsonIgnoreProperties(value = {"new", "id"})
public class Operador extends Usuario{

	private static final long serialVersionUID = 1L;

	public Operador(){}

	public Operador(String subId) {
		super(subId);
	}
}
