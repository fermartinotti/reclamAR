package ar.edu.unq.reclamar.dto;

import ar.edu.unq.reclamar.modelo.Puntuacion;

public class PuntuacionReclamoDTO {
	Long idReclamo;
	Puntuacion puntuacion;
	
	public Long getIdReclamo() {
		return idReclamo;
	}
	public void setIdReclamo(Long idReclamo) {
		this.idReclamo = idReclamo;
	}
	public Puntuacion getPuntuacion() {
		return puntuacion;
	}
	public void setPuntuacion(Puntuacion puntuacion) {
		this.puntuacion = puntuacion;
	}
	
	public PuntuacionReclamoDTO(Long idReclamo, Puntuacion puntuacion) {
		super();
		this.idReclamo = idReclamo;
		this.puntuacion = puntuacion;
	}
	public PuntuacionReclamoDTO() {
		super();
	}
	
	
	
	
	
	

}
