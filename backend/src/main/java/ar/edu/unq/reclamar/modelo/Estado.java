package ar.edu.unq.reclamar.modelo;

import javax.persistence.Entity;

import org.springframework.data.jpa.domain.AbstractPersistable;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties(value = {"new"})
public abstract class Estado extends AbstractPersistable<Long>{

}
