package ar.edu.unq.reclamar;

import java.util.Arrays;
import java.util.List;

import org.apache.cxf.bus.spring.SpringBus;
import org.apache.cxf.endpoint.Server;
import org.apache.cxf.jaxrs.JAXRSServerFactoryBean;
import org.apache.cxf.rs.security.cors.CrossOriginResourceSharingFilter;
import org.apache.cxf.transport.servlet.CXFServlet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.ServletRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.DependsOn;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import com.fasterxml.jackson.jaxrs.json.JacksonJsonProvider;

import ar.edu.unq.reclamar.api.ReclamarApi;


@Configuration
public class Configuracion{

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
}
