package ar.edu.unq.reclamar.modelo;

import javax.persistence.Column;
import javax.persistence.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties(value = {"new" , "id"})
public class Abierto extends Estado {
	
	private static final long serialVersionUID = 1L;
	
	public Abierto(){};
	
	@Column
	public String comentarioReapertura;

	public String getComentarioReapertura() {
		return comentarioReapertura;
	}

	public void setComentarioReapertura(String comentarioReapertura) {
		this.comentarioReapertura = comentarioReapertura;
	}
	
	
	
}
