package ar.edu.unq.reclamar.utils;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class StringToLocalDate {
	
	static DateTimeFormatter formatter = DateTimeFormatter.ofPattern("d/M/yyyy");
	
	public static LocalDate convertStringToLocalDate(String fecha) {
		return LocalDate.parse(fecha, formatter);
	}

}
