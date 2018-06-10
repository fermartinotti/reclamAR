package ar.edu.unq.reclamar.dto;

public class ReabrirReclamoDTO {
	
	Long idReclamo;
	String motivoReapertura;
	
	public Long getIdReclamo() {
		return idReclamo;
	}
	public void setIdReclamo(Long idReclamo) {
		this.idReclamo = idReclamo;
	}
	public String getMotivoReapertura() {
		return motivoReapertura;
	}
	public void setMotivoReapertura(String motivoReapertura) {
		this.motivoReapertura = motivoReapertura;
	}
	
	public ReabrirReclamoDTO(Long idReclamo, String motivo) {
		super();
		this.idReclamo = idReclamo;
		this.motivoReapertura = motivo;
	}
	public ReabrirReclamoDTO() {
		super();
	}
}
