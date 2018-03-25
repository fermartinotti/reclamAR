package ar.edu.unq.reclamar.utils;

import javax.persistence.Entity;

import org.springframework.data.jpa.domain.AbstractPersistable;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties(value = {"new"})
public class Localizacion  extends AbstractPersistable<Long> {
	
	private static final long serialVersionUID = 1L;

}
