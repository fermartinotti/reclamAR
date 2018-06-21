package ar.edu.unq.reclamar.modelo;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;

import org.springframework.data.jpa.domain.AbstractPersistable;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import com.fasterxml.jackson.annotation.JsonSubTypes.Type;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

import ar.edu.unq.reclamar.utils.MiLocalDateTimeSerializer;

@Entity
@JsonIgnoreProperties(value = {"new"})
@JsonTypeInfo(use = JsonTypeInfo.Id.NAME, include = JsonTypeInfo.As.PROPERTY, property = "type")
@JsonSubTypes({
    @Type(value = Abierto.class, name = "Abierto"),
    @Type(value = EnReparacion.class, name = "Reparacion"),
    @Type(value = Demorado.class, name="Demorado"),
    @Type(value = Cerrado.class, name= "Cerrado"),
    @Type(value = Reabierto.class, name= "Reabierto")
    }
)
public abstract class Estado extends AbstractPersistable<Long>{
	
	private static final long serialVersionUID = 1L;

	@Column
	@JsonSerialize(using= MiLocalDateTimeSerializer.class)
	public LocalDateTime fechaIninio = LocalDateTime.now();

	public LocalDateTime getFechaIninio() {
		return fechaIninio;
	}

	public void setFechaIninio(LocalDateTime fechaIninio) {
		this.fechaIninio = fechaIninio;
	}
	
}
