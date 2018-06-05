package ar.edu.unq.reclamar.utils;
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;

public class EmailSender {

	public EmailSender(){ 
	}
	

	public static com.mashape.unirest.http.JsonNode sendEmail(String email, String subject, String descripcion) throws UnirestException {
	
	HttpResponse<com.mashape.unirest.http.JsonNode> request = Unirest.post("https://api.mailgun.net/v3/" + "sandbox1c3b7ddcc6da457d87aa7e485e6feaf9.mailgun.org" + "/messages")
	    .basicAuth("api", "key-d367f7b5732a3ae710e6e6e823a4fafc")
	.queryString("from", "postmaster@sandbox1c3b7ddcc6da457d87aa7e485e6feaf9.mailgun.org")
	.queryString("to", email)
	.queryString("subject", subject)
	.queryString("text", descripcion)
	.asJson();
	request.getStatus();
	
	return request.getBody();
	}
	
}
