package ar.edu.unq.reclamar.dto;

public class CerrarReclamoDTO {
	
	Long idReclamo;
	Long idCuadrilla;
	
	public Long getIdReclamo() {
		return idReclamo;
	}
	public void setIdReclamo(Long idReclamo) {
		this.idReclamo = idReclamo;
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
	}
	public CerrarReclamoDTO() {
		super();
	}
}
