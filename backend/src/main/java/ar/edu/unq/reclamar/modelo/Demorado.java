package ar.edu.unq.reclamar.modelo;

import javax.persistence.Column;
import javax.persistence.Entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties(value = {"new" , "id"})
public class Demorado extends Estado {
	
	private static final long serialVersionUID = 1L;

	@Column
	public String motivo;
	
	@Column
	public String nuevaFecha;
	
	public Demorado() {}
	
	public Demorado(String fecha, String motivo){
		this.motivo = motivo;
		this.nuevaFecha = fecha;
	}

	public String getMotivo() {
		return motivo;
	}

	public void setMotivo(String motivo) {
		this.motivo = motivo;
	}

	public String getNuevaFecha() {
		return nuevaFecha;
	}

	public void setNuevaFecha(String nuevaFecha) {
		this.nuevaFecha = nuevaFecha;
	}	
}
