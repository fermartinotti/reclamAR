package ar.edu.unq.reclamar.modelo;

import javax.persistence.Column;
import javax.persistence.Entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties(value = {"new", "id"})
public class Luminaria extends TipoDeReclamo{


	private static final long serialVersionUID = 1L;
	
	@Column
	public boolean problemaPalo;
	
	@Column
	public boolean problemaFoco;

	
	public boolean isProblemaPalo() {
		return problemaPalo;
	}

	public void setProblemaPalo(boolean problemaPalo) {
		this.problemaPalo = problemaPalo;
	}

	public boolean isProblemaFoco() {
		return problemaFoco;
	}

	public void setProblemaFoco(boolean problemaFoco) {
		this.problemaFoco = problemaFoco;
	}

	public Luminaria(){}

	public Luminaria(boolean problemaPalo, boolean problemaFoco) {
		super();
		this.problemaPalo = problemaPalo;
		this.problemaFoco = problemaFoco;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (!super.equals(obj))
			return false;
		if (getClass() != obj.getClass())
			return false;
		Luminaria other = (Luminaria) obj;
		if (problemaFoco != other.problemaFoco)
			return false;
		if (problemaPalo != other.problemaPalo)
			return false;
		return true;
	}
}
