package ar.edu.unq.reclamar.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import ar.edu.unq.reclamar.modelo.Admin;

public interface AdminRepository extends CrudRepository<Admin, Long> {

	@Query("SELECT o FROM Admin o where o.subId = ?1")
	public Admin getAdminBySubId(String subId);
}
