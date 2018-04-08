package ar.edu.unq.reclamar.modelo;

import javax.persistence.Entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties(value = {"new" , "id"})
public class Abierto extends Estado {
	public Abierto(){};
	
}
