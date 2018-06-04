package ar.edu.unq.reclamar.modelo;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

import org.springframework.data.jpa.domain.AbstractPersistable;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import ar.edu.unq.reclamar.exceptions.DatoInvalidoException;

@Entity
@JsonIgnoreProperties(value = {"new"})
public class Cuadrilla extends AbstractPersistable<Long> {
	
	private static final long serialVersionUID = 1L;
	
	@OneToMany(fetch = FetchType.EAGER)
	@JoinColumn(name="empleados")
	List<EmpleadoCuadrilla> empleadosCuadrilla = new ArrayList<EmpleadoCuadrilla>();
	
	Integer maximoEmpleados = 6;
	
	@Column
	boolean estaDisponible = true;
	
	public List<EmpleadoCuadrilla> getEmpleadosCuadrilla() {
		return empleadosCuadrilla;
	}
	public void setEmpleadosCuadrilla(List<EmpleadoCuadrilla> empleadosCuadrilla) {
		this.empleadosCuadrilla = empleadosCuadrilla;
	}
	public Integer getMaximoEmpleados() {
		return maximoEmpleados;
	}
	public void setMaximoEmpleados(Integer maximoEmpleados) {
		this.maximoEmpleados = maximoEmpleados;
	}
	public boolean isEstaDisponible() {
		return estaDisponible;
	}
	public void setEstaDisponible(boolean estaDisponible) {
		this.estaDisponible = estaDisponible;
	}
	
	public boolean puedeCrearCuadrilla(Integer cantidad) throws DatoInvalidoException{
		if(cantidad > maximoEmpleados) {
			throw new DatoInvalidoException("La cuadrilla tiene una capacidad máxima para 6 personas");
		}
		return true;
	}
	
	public void agregarEmpleado(EmpleadoCuadrilla empleado){
		empleadosCuadrilla.add(empleado);
	}
	
	public Cuadrilla(List<EmpleadoCuadrilla> empleadosCuadrilla) {
		super();
		this.empleadosCuadrilla = empleadosCuadrilla;
	}
	
	public Cuadrilla() {
		super();
	}	
}
