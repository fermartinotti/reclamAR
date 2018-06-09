package ar.edu.unq.reclamar.dto;

public class CerrarReclamoDTO {
	
	Long idReclamo;
	String comentario;
	
	public Long getIdReclamo() {
		return idReclamo;
	}
	public void setIdReclamo(Long idReclamo) {
		this.idReclamo = idReclamo;
	}
	public String getComentario() {
		return comentario;
	}
	public void setComentario(String comentario) {
		this.comentario = comentario;
	}
	public CerrarReclamoDTO(Long idReclamo, String comentario) {
		super();
		this.idReclamo = idReclamo;
		this.comentario = comentario;
	}
	public CerrarReclamoDTO() {
		super();
	}
}
