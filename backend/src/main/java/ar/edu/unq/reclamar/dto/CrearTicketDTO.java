package ar.edu.unq.reclamar.dto;

public class CrearTicketDTO {

	long idReclamo;
	String motivo;
	String detalle;
	
	public long getIdReclamo() {
		return idReclamo;
	}
	public void setIdReclamo(long idReclamo) {
		this.idReclamo = idReclamo;
	}
	public String getMotivo() {
		return motivo;
	}
	public void setMotivo(String motivo) {
		this.motivo = motivo;
	}
	public String getDetalle() {
		return detalle;
	}
	public void setDetalle(String detalle) {
		this.detalle = detalle;
	}
	
	public CrearTicketDTO() {}
}

