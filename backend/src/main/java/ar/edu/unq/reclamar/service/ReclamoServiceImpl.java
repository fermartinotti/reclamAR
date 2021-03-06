package ar.edu.unq.reclamar.service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mashape.unirest.http.exceptions.UnirestException;

import ar.edu.unq.reclamar.dto.AsignarCuadrillaDTO;
import ar.edu.unq.reclamar.dto.CerrarReclamoDTO;
import ar.edu.unq.reclamar.dto.PuntuacionReclamoDTO;
import ar.edu.unq.reclamar.dto.ReabrirReclamoDTO;
import ar.edu.unq.reclamar.dto.ReprogramarReclamoDTO;
import ar.edu.unq.reclamar.exceptions.DatoInvalidoException;
import ar.edu.unq.reclamar.modelo.Abierto;
import ar.edu.unq.reclamar.modelo.Admin;
import ar.edu.unq.reclamar.modelo.Cerrado;
import ar.edu.unq.reclamar.modelo.Cuadrilla;
import ar.edu.unq.reclamar.modelo.Demorado;
import ar.edu.unq.reclamar.modelo.EnReparacion;
import ar.edu.unq.reclamar.modelo.Operador;
import ar.edu.unq.reclamar.modelo.Puntuacion;
import ar.edu.unq.reclamar.modelo.Reabierto;
import ar.edu.unq.reclamar.modelo.Reclamo;
import ar.edu.unq.reclamar.repository.CuadrillaRepository;
import ar.edu.unq.reclamar.repository.EstadoRepository;
import ar.edu.unq.reclamar.repository.LocalizacionRepository;
import ar.edu.unq.reclamar.repository.PuntuacionRepository;
import ar.edu.unq.reclamar.repository.ReclamoRepository;
import ar.edu.unq.reclamar.repository.TipodDeReclamoRepository;
import ar.edu.unq.reclamar.repository.UsuarioRepository;
import ar.edu.unq.reclamar.utils.EmailSender;
import ar.edu.unq.reclamar.utils.StringToLocalDate;

@Service
public class ReclamoServiceImpl implements ReclamoService {

	@Autowired
	private ReclamoRepository repository;

	@Autowired
	private UsuarioRepository usuarioRepository;

	@Autowired
	private SecurityService securityService;

	@Autowired
	private EstadoRepository estadoRepository;

	@Autowired
	private TipodDeReclamoRepository tipoDeReclamoRepository;

	@Autowired
	private LocalizacionRepository localizacionRepository;

	@Autowired
	private CuadrillaRepository cuadrillaRepository;

	@Autowired
	private PuntuacionRepository puntuacionRepository;

	@Override
	public List<Reclamo> misReclamos() {
		return repository.getReclamosByUsuario(securityService.setUsuarioLogueado());
	}

	@Override
	@Transactional
	public void agregarReclamo(Reclamo reclamo) throws DatoInvalidoException {
		Operador userLogeado = (Operador) securityService.setUsuarioLogueado();
		reclamo.setAutor(userLogeado);
		reclamo.setFechaDeCreacion(LocalDateTime.now());

		Abierto estado = new Abierto();
		estadoRepository.save(estado);

		reclamo.setEstado(estado);
		reclamo.getEstados().add(estado);

		reclamo.setPuntuacion(0);

		localizacionRepository.save(reclamo.getLugarDeIncidente());
		reclamo.setDireccionFisica(reclamo.getLugarDeIncidente().getDireccionFisica());
		tipoDeReclamoRepository.save(reclamo.getTipoDeReclamo());

		repository.save(reclamo);
		userLogeado.getReclamos().add(reclamo);
		usuarioRepository.save(userLogeado);
		try {
			EmailSender.sendEmail(userLogeado.getEmail(), "Su reclamo se creo con exito. ",
					"Muchas gracias por reportar la problematica. Su reclamo numero: " + reclamo.getId()
							+ " fue creado con exito. ");
		} catch (UnirestException e) {

		}
	}

	@Override
	@Transactional
	public void asignacionCuadrilla(AsignarCuadrillaDTO asignar) {
		Admin userLogeado = (Admin) securityService.setUsuarioLogueado();

		Reclamo reclamo = getReclamoById(asignar.getIdReclamo());
		Cuadrilla cuadrilla = cuadrillaRepository.findOne(asignar.getIdCuadrilla());

		cuadrilla.getReclamosAsignados().add(reclamo);

		cuadrillaRepository.save(cuadrilla);
		EnReparacion estado = new EnReparacion();
		
		estado.setFechaDeReparacion(StringToLocalDate.convertStringToLocalDate(asignar.getFecha()));
		estadoRepository.save(estado);

		reclamo.setEstado(estado);
		reclamo.getEstados().add(estado);

		repository.save(reclamo);
		usuarioRepository.save(userLogeado);

	}

	@Override
	public Optional<Reclamo> getReclamo(Long id) {
		return Optional.ofNullable(repository.findOne(id));
	}

	@Override
	public List<Reclamo> todosLosReclamos() {
		return (List<Reclamo>) repository.findAll();
	}

	@Override
	public Reclamo getReclamoById(Long id) {
		return repository.findOne(id);
	}

	@Override
	@Transactional
	public void finalizarReclamo(CerrarReclamoDTO cerrar) {
		Admin userLogeado = (Admin) securityService.setUsuarioLogueado();

		Reclamo reclamo = getReclamoById(cerrar.getIdReclamo());

		Cerrado estadoCerrado = new Cerrado();
		//estadoCerrado.setComentario(cerrar.getComentario());
		estadoCerrado.setFechaFinalizacion(LocalDateTime.now());
		estadoRepository.save(estadoCerrado);

		Cuadrilla cuadrilla = cuadrillaRepository.findOne(cerrar.getIdCuadrilla());
		cuadrilla.getReclamosAsignados().remove(reclamo);

		cuadrillaRepository.save(cuadrilla);

		reclamo.setEstado(estadoCerrado);
		reclamo.getEstados().add(estadoCerrado);

		repository.save(reclamo);
		usuarioRepository.save(userLogeado);

	}

	@Override
	@Transactional
	public void reabrirReclamo(ReabrirReclamoDTO reabrir) {
		Operador userLogeado = (Operador) securityService.setUsuarioLogueado();

		Reclamo reclamo = getReclamoById(reabrir.getIdReclamo());

		Abierto reabierto = new Abierto();
		reabierto.setComentarioReapertura(reabrir.getMotivoReapertura());

		estadoRepository.save(reabierto);

		reclamo.setEstado(reabierto);
		reclamo.getEstados().add(reabierto);

		repository.save(reclamo);
		usuarioRepository.save(userLogeado);

	}

	@Override
	@Transactional
	public void puntuarReclamo(PuntuacionReclamoDTO puntuacionR) {
		Operador userLogeado = (Operador) securityService.setUsuarioLogueado();
		Reclamo reclamo = getReclamoById(puntuacionR.getIdReclamo());
		
		reclamo.setPuntuacion(puntuacionR.getPuntuacion());
		
		repository.save(reclamo);
		usuarioRepository.save(userLogeado);
	}
	
	@Override
	@Transactional
	public void reprogramarReclamo(ReprogramarReclamoDTO reprogamarR) {
		Admin userLogeado = (Admin) securityService.setUsuarioLogueado();
		
		Cuadrilla cuadrilla = cuadrillaRepository.findOne(reprogamarR.getIdCuadrilla());
		Reclamo reclamo = getReclamoById(reprogamarR.getIdReclamo());
		
		Demorado demorado = new Demorado();
		demorado.setNuevaFecha(StringToLocalDate.convertStringToLocalDate(reprogamarR.getFecha()));
		demorado.setMotivo(reprogamarR.getMotivo());
		
		estadoRepository.save(demorado);
		
		cuadrilla.getReclamosAsignados().remove(reclamo);

		cuadrillaRepository.save(cuadrilla);

		reclamo.setEstado(demorado);
		reclamo.getEstados().add(demorado);

		repository.save(reclamo);
		usuarioRepository.save(userLogeado);
		
	}
}
