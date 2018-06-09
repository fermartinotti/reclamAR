package ar.edu.unq.reclamar.dto;

public class AsignarCuadrillaDTO {
	
	Long idReclamo;
	Long idCuadrilla;
	String fecha;
	
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
	public AsignarCuadrillaDTO(Long idReclamo, Long idCuadrilla, String fecha) {
		super();
		this.idReclamo = idReclamo;
		this.idCuadrilla = idCuadrilla;
		this.fecha = fecha;
	}
	public AsignarCuadrillaDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	

}
