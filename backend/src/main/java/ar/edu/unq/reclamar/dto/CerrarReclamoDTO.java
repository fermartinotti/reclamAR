package ar.edu.unq.reclamar.dto;

public class CerrarReclamoDTO {
	
	Long idReclamo;
	Long idCuadrilla;
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
	public Long getIdCuadrilla() {
		return idCuadrilla;
	}
	public void setIdCuadrilla(Long idCuadrilla) {
		this.idCuadrilla = idCuadrilla;
	}
	
	public CerrarReclamoDTO(Long idReclamo, Long idCuadrilla, String comentario) {
		super();
		this.idReclamo = idReclamo;
		this.idCuadrilla = idCuadrilla;
		this.comentario = comentario;
	}
	public CerrarReclamoDTO() {
		super();
	}
}
