package ar.edu.unq.reclamar.dto;

public class ResponderTicketDTO {
	long idTicket;
	String respuesta;

	
	public long getIdTicket() {
		return idTicket;
	}
	public void setIdTicket(long idTicket) {
		this.idTicket = idTicket;
	}
	public String getRespuesta() {
		return respuesta;
	}
	public void setRespuesta(String respuesta) {
		this.respuesta = respuesta;
	}

	public ResponderTicketDTO() {
	}
}
