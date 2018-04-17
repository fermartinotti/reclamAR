package ar.edu.unq.reclamar.modelo;

import javax.persistence.Entity;

import org.springframework.data.jpa.domain.AbstractPersistable;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonSubTypes.Type;
import com.fasterxml.jackson.annotation.JsonTypeInfo;

@Entity
@JsonIgnoreProperties(value = {"new", "id"})
@JsonTypeInfo(use = JsonTypeInfo.Id.NAME, include = JsonTypeInfo.As.PROPERTY, property = "type")
@JsonSubTypes({
    @Type(value = Luminaria.class, name = "luminaria"),
    @Type(value = Bacheo.class, name = "bacheo"),
    @Type(value = Arboleda.class, name = "arboleda"),
    @Type(value = Semaforo.class, name = "semaforo")
    }
)
public abstract class TipoDeReclamo extends AbstractPersistable<Long>{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
}
