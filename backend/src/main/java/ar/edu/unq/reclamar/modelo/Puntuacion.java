package ar.edu.unq.reclamar.modelo;

import javax.persistence.Column;
import javax.persistence.Entity;

import org.springframework.data.jpa.domain.AbstractPersistable;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import ar.edu.unq.reclamar.exceptions.DatoInvalidoException;

@Entity
@JsonIgnoreProperties(value = {"new"})
public class Puntuacion extends AbstractPersistable<Long> {
	
	private static final long serialVersionUID = 1L;

	@Column
	Integer puntuacion;
	
	@Column
	String comentario;
	
	public Integer getPuntuacion() {
		return puntuacion;
	}
	public void calificar(Integer puntuacion) throws DatoInvalidoException{
		if(puntuacion > 5 || puntuacion < 1) {
			throw new DatoInvalidoException("Ha ingresado una calificación erronea (1 - Calificacion mínima , 5 - Calificación máxima)");
		}
		this.puntuacion = puntuacion;
	}
	public String getComentario() {
		return comentario;
	}
	public void setComentario(String comentario) {
		this.comentario = comentario;
	}
	
	public Puntuacion() {
		super();
	}
}
