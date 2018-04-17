package ar.edu.unq.reclamar.modelo;

import javax.persistence.Entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties(value = {"new", "id"})
public class Bacheo extends TipoDeReclamo{

	private static final long serialVersionUID = 1L;
	
	public Bacheo() {}
	
}
