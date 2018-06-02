package ar.edu.unq.reclamar.modelo;

import java.util.List;

public class Cuadrilla {
	TipoDeReclamo tipo;
	List<EmpleadoCuadrilla> empleadosCuadrilla;
	
	public TipoDeReclamo getTipo() {
		return tipo;
	}
	public void setTipo(TipoDeReclamo tipo) {
		this.tipo = tipo;
	}
	public List<EmpleadoCuadrilla> getEmpleadosCuadrilla() {
		return empleadosCuadrilla;
	}
	public void setEmpleadosCuadrilla(List<EmpleadoCuadrilla> empleadosCuadrilla) {
		this.empleadosCuadrilla = empleadosCuadrilla;
	}
	public Cuadrilla(List<EmpleadoCuadrilla> empleadosCuadrilla) {
		super();
		this.empleadosCuadrilla = empleadosCuadrilla;
	}
}
