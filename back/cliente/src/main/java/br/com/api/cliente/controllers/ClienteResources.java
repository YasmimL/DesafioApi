package br.com.api.cliente.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.api.cliente.models.Cliente;
import br.com.api.cliente.repository.ClienteRepository;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping(value = "/api")
@Api(value = "API Clientes")
@CrossOrigin(origins = "*")
public class ClienteResources {

	@Autowired
	ClienteRepository clienteRepository;
	
	@GetMapping("/clientes")
	@ApiOperation(value = "Retorna uma lista de clientes")
	public List<Cliente> listarClientes() {
		return clienteRepository.findAll();
	}
	
	@GetMapping("/cliente/{id}")
	@ApiOperation(value = "Retorna um cliente unico")
	public Cliente listarClientePorId(@PathVariable(value = "id") long id) {
		return clienteRepository.findById(id);
	}
	
	@PostMapping("/cliente")
	@ApiOperation(value = "Salva um cliente")
	public Cliente salvarCliente(@RequestBody Cliente cliente) {
		return clienteRepository.save(cliente);
	}
	
	@ApiOperation(value = "Deleta um cliente")
	@DeleteMapping("/cliente")
	public void excluirCliente(@RequestBody Cliente cliente) {
		clienteRepository.delete(cliente);
	}
	
	@PutMapping("/cliente")
	@ApiOperation(value = "Atualiza um cliente")
	public Cliente atualizarCliente(@RequestBody Cliente cliente) {
		return clienteRepository.save(cliente);
	}
}
