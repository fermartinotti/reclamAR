package ar.edu.unq.reclamar.modelo;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

import org.springframework.data.jpa.domain.AbstractPersistable;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties(value = {"new"})
public class Cuadrilla extends AbstractPersistable<Long> {
	
	private static final long serialVersionUID = 1L;
	
//	@OneToMany(fetch = FetchType.EAGER)
//	@JoinColumn(name="empleados")
//	List<EmpleadoCuadrilla> empleadosCuadrilla;
//	
//	public List<EmpleadoCuadrilla> getEmpleadosCuadrilla() {
//		return empleadosCuadrilla;
//	}
//	public void setEmpleadosCuadrilla(List<EmpleadoCuadrilla> empleadosCuadrilla) {
//		this.empleadosCuadrilla = empleadosCuadrilla;
//	}
//	
//	public Cuadrilla(List<EmpleadoCuadrilla> empleadosCuadrilla) {
//		super();
//		this.empleadosCuadrilla = empleadosCuadrilla;
//	}
	
	public Cuadrilla() {
		super();
	}
	
	
}
