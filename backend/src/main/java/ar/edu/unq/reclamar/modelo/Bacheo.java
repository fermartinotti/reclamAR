package ar.edu.unq.reclamar.modelo;

import javax.persistence.Column;
import javax.persistence.Entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties(value = {"new", "id"})
public class Bacheo extends TipoDeReclamo{

	private static final long serialVersionUID = 1L;
	
	@Column
	public boolean hundimientoDelPavimento;
	
	
	public boolean isHundimientoDelPavimento() {
		return hundimientoDelPavimento;
	}

	public void setHundimientoDelPavimento(boolean hundimientoDelPavimento) {
		this.hundimientoDelPavimento = hundimientoDelPavimento;
	}

	public Bacheo() {}
	
}
