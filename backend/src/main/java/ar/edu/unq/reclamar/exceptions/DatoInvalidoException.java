package ar.edu.unq.reclamar.exceptions;

public class DatoInvalidoException extends RuntimeException {

	private static final long serialVersionUID = 1L;

	public DatoInvalidoException(String message) {
       super(message);
    }
}
