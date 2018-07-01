package ar.edu.unq.reclamar.dto;

import ar.edu.unq.reclamar.modelo.Puntuacion;

public class PuntuacionReclamoDTO {
	Long idReclamo;
	int puntuacion;
	
	public Long getIdReclamo() {
		return idReclamo;
	}
	public void setIdReclamo(Long idReclamo) {
		this.idReclamo = idReclamo;
	}
	
	
	public int getPuntuacion() {
		return puntuacion;
	}
	public void setPuntuacion(int puntuacion) {
		this.puntuacion = puntuacion;
	}
	public PuntuacionReclamoDTO(Long idReclamo, int puntuacion) {
		super();
		this.idReclamo = idReclamo;
		this.puntuacion = puntuacion;
	}
	public PuntuacionReclamoDTO() {
		super();
	}
	
	
	
	
	
	

}
