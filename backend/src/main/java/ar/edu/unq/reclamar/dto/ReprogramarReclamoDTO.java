package ar.edu.unq.reclamar.dto;

public class ReprogramarReclamoDTO {
	
	Long idReclamo;
	Long idCuadrilla;
	String fecha;
	String motivo;
	
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
	public String getFecha() {
		return fecha;
	}
	public void setFecha(String fecha) {
		this.fecha = fecha;
	}
	public String getMotivo() {
		return motivo;
	}
	public void setMotivo(String motivo) {
		this.motivo = motivo;
	}
	
	public ReprogramarReclamoDTO(Long idReclamo, Long idCuadrilla, String fecha, String motivo) {
		super();
		this.idReclamo = idReclamo;
		this.idCuadrilla = idCuadrilla;
		this.fecha = fecha;
		this.motivo = motivo;
	}
	
	public ReprogramarReclamoDTO() {
		super();
	}
	
	
	
	

}
