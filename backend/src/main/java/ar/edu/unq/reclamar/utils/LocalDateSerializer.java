package ar.edu.unq.reclamar.utils;

import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.ser.std.StdSerializer;

public class LocalDateSerializer extends StdSerializer<LocalDateTime> {

private static final long serialVersionUID = 1L;

	public LocalDateSerializer() {
		this(null);
	}
	
	public LocalDateSerializer(Class<LocalDateTime> t) {
		super(t);
	}

	@Override
	public void serialize(LocalDateTime fecha, JsonGenerator jsonGenerator, SerializerProvider provider) throws IOException{
		
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
		String formattedString = fecha.format(formatter);
		
		jsonGenerator.writeString(formattedString);
	}
}
