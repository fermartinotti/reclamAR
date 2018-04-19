package ar.edu.unq.reclamar.modelo;

import javax.persistence.Column;
import javax.persistence.Entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties(value = {"new", "id"})
public class Semaforo extends TipoDeReclamo{

	private static final long serialVersionUID = 1L;
	
	@Column
	public boolean problemaEstructura;
	
	@Column
	public boolean problemaMalFuncionamiento;
	
	@Column
	public boolean problemaNoFunciona;
	
	
	public boolean isProblemaEstructura() {
		return problemaEstructura;
	}

	public void setPoblemaEstructura(boolean poblemaEstructura) {
		this.problemaEstructura = poblemaEstructura;
	}

	public boolean isProblemaMalFuncionamiento() {
		return problemaMalFuncionamiento;
	}

	public void setProblemaMalFuncionamiento(boolean problemaMalFuncionamiento) {
		this.problemaMalFuncionamiento = problemaMalFuncionamiento;
	}

	public boolean isProblemaNoFunciona() {
		return problemaNoFunciona;
	}

	public void setProblemaNoFunciona(boolean problemaNoFunciona) {
		this.problemaNoFunciona = problemaNoFunciona;
	}

	public Semaforo() {}
	
	

}
