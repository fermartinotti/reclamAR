package ar.edu.unq.reclamar.builders;

import ar.edu.unq.reclamar.modelo.Luminaria;

public class BuilderLuminaria {
	
	public boolean problemaPalo;
	public boolean problemaFoco;
	
	public BuilderLuminaria() {
		super();
	}
	
	public BuilderLuminaria setProblemaPalo(boolean problemaPalo) {
		this.problemaPalo = problemaPalo;
		return this;
	}

	public BuilderLuminaria setProblemaFoco(boolean problemaFoco) {
		this.problemaFoco = problemaFoco;
		return this;
	}
	
	public Luminaria createObject() {
		return new Luminaria(problemaPalo, problemaFoco);
	}

}
