package br.com.api.cliente.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.api.cliente.models.Cliente;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Long> {

	Cliente findById(long id);
	
}
