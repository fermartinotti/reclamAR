package ar.edu.unq.reclamar.modelo;

import javax.persistence.Entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties(value = {"new"})
public class Abierto extends Estado {
	public Abierto(){};
	
}
