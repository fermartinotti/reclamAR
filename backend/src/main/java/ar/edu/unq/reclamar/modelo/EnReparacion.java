package ar.edu.unq.reclamar.modelo;

import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;

import org.apache.cxf.jaxrs.provider.JavaTimeTypesParamConverterProvider.LocalDateTimeConverter;
import org.springframework.format.datetime.joda.LocalDateTimeParser;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

import ar.edu.unq.reclamar.utils.LocalDateSerializer;
import ar.edu.unq.reclamar.utils.MiLocalDateTimeSerializer;

@Entity
@JsonIgnoreProperties(value = {"new" , "id"})
public class EnReparacion extends Estado {

	private static final long serialVersionUID = 1L;
	
	@Column
	@JsonSerialize(using= LocalDateSerializer.class)
	public LocalDateTime fechaDeReparacion;
	
	public LocalDateTime getFechaDeReparacion() {
		return fechaDeReparacion;
	}
	public void setFechaDeReparacion(LocalDate fechaDeReparacion) {
		LocalDateTime fecha = LocalDateTime.of(fechaDeReparacion.getYear(), fechaDeReparacion.getMonthValue()
				, fechaDeReparacion.getDayOfMonth(), 0, 0);
		this.fechaDeReparacion = fecha;
	}

	public EnReparacion() {}
	
	public EnReparacion(LocalDateTime fechaDeReparacion) {
		super();
		this.fechaDeReparacion = fechaDeReparacion;
	}	
}
