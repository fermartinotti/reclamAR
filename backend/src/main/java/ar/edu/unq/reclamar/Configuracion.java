package ar.edu.unq.reclamar;

import java.util.Arrays;
import java.util.List;

import org.apache.cxf.bus.spring.SpringBus;
import org.apache.cxf.endpoint.Server;
import org.apache.cxf.jaxrs.JAXRSServerFactoryBean;
import org.apache.cxf.rs.security.cors.CrossOriginResourceSharingFilter;
import org.apache.cxf.transport.servlet.CXFServlet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.servlet.ServletRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.DependsOn;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

import com.auth0.spring.security.api.JwtWebSecurityConfigurer;
import com.fasterxml.jackson.jaxrs.json.JacksonJsonProvider;

import ar.edu.unq.reclamar.api.ReclamarApi;


@Configuration
@EnableWebSecurity(debug = false)
public class Configuracion extends WebSecurityConfigurerAdapter {

	@Value(value = "5b0898633b631f527538f16d")
    private String apiAudience;
    @Value(value = "http://localhost:8090/api")
    private String issuer;
	
	@Autowired
    private ReclamarApi reclamarApi;
    
    @Bean(destroyMethod = "shutdown")
    public SpringBus cxf() {
        return new SpringBus();
    }
    
    @Bean(destroyMethod = "destroy")
    @DependsOn("cxf")
    public Server jaxRsServer() {
    	
    	List<Object> providers = Arrays.asList(new JacksonJsonProvider(), new CrossOriginResourceSharingFilter());
    	
        final JAXRSServerFactoryBean factory = new JAXRSServerFactoryBean();
        factory.setServiceBeanObjects(this.reclamarApi);
        factory.setProviders(providers);
        factory.setBus(cxf());
        factory.setAddress("/");

        return factory.create();
    }
    
    @Bean
    public ServletRegistrationBean cxfServlet() {
        final ServletRegistrationBean servletRegistrationBean = new ServletRegistrationBean(new CXFServlet(), "/api/*");
        servletRegistrationBean.setLoadOnStartup(1);
        return servletRegistrationBean;
    }
    
    protected void configure(HttpSecurity http) throws Exception {
//    	http.csrf().disable()
//        .authorizeRequests()
//        .antMatchers(HttpMethod.GET, "/api/rest/reclamos/todos").permitAll()
//        .antMatchers(HttpMethod.GET, "/api/private").authenticated()
//        .antMatchers(HttpMethod.GET, "/api/private").permitAll();
    	
    	
    JwtWebSecurityConfigurer
         .forRS256(apiAudience, issuer)
         .configure(http)
         .authorizeRequests()
                .antMatchers(HttpMethod.GET, "/api/rest/reclamos/todos").permitAll()
                .antMatchers(HttpMethod.GET, "/api/private").authenticated()
                .antMatchers(HttpMethod.GET, "/api/private-scoped").hasAuthority("read:messages");
    }
    

    
}
