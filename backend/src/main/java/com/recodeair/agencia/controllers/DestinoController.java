package com.recodeair.agencia.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.recodeair.agencia.dto.DestinoDTO;
import com.recodeair.agencia.services.DestinoService;

@RestController
@RequestMapping(value = "/destinos")
public class DestinoController {
	
	@Autowired
	private DestinoService service;
	
	@GetMapping
	public Page<DestinoDTO>  findAll(Pageable pageble){
		return service.findAll(pageble);
	}
	
	@GetMapping(value = "/{id}")
	public DestinoDTO findById(@PathVariable Long id){
		return service.findById(id);
	}
	
	@PutMapping
	public DestinoDTO saveDestino(@RequestBody DestinoDTO dto) {
		DestinoDTO destinoDTO = service.saveDestino(dto);
		return destinoDTO;
	}
	  
	
}

