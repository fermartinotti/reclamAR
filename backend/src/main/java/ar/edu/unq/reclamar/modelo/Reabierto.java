package ar.edu.unq.reclamar.modelo;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties(value = {"new" , "id"})
public class Reabierto extends Estado{

	private static final long serialVersionUID = 1L;
	
	@Column
	LocalDate fechaReaperturaReclamo;
	
	@Column
	String motivoReapertura;
	
	public LocalDate getFechaReaperturaReclamo() {
		return fechaReaperturaReclamo;
	}
	public void setFechaReaperturaReclamo(LocalDate fechaReaperturaReclamo) {
		this.fechaReaperturaReclamo = fechaReaperturaReclamo;
	}
	public String getMotivoReapertura() {
		return motivoReapertura;
	}
	public void setMotivoReapertura(String motivoReapertura) {
		this.motivoReapertura = motivoReapertura;
	}
	public Reabierto(String nuevaFechaDeCierre, String motivoReapertura) {
		super();
		this.fechaReaperturaReclamo = LocalDate.now();
		this.motivoReapertura = motivoReapertura;
	}
	public Reabierto() {
		super();
		this.fechaReaperturaReclamo = LocalDate.now();
	}
}
