package ar.edu.unq.reclamar.modelo;

import javax.persistence.Entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties(value = {"new"})
public class Luminaria extends TipoDeReclamo{

	public Luminaria(){};
}
