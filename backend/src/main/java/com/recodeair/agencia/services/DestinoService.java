package com.recodeair.agencia.services;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.recodeair.agencia.dto.DestinoDTO;
import com.recodeair.agencia.entities.Destino;
import com.recodeair.agencia.repositories.DestinoRepository;



@Service
public class DestinoService{
	
	@Autowired
	private DestinoRepository repository;
	
	@Transactional(readOnly = true)
	public Page<DestinoDTO> findAll(Pageable pageble){
		Page<Destino> result = repository.findAll(pageble);
		Page<DestinoDTO> page = result.map(x -> new DestinoDTO(x));
		return page;
	}
	
	@Transactional(readOnly = true)
	public DestinoDTO findById(Long id){
		Destino result = repository.findById(id).get();
		DestinoDTO dto = new DestinoDTO(result);
		return dto;
	}
	
	
	@Transactional
	public DestinoDTO saveDestino(DestinoDTO dto) {
		
		Destino destino = new Destino();
		
		destino.setNome(dto.getNome());
		destino.setDescricao(dto.getDescricao());
		destino.setImagem(dto.getImagem());
		destino.setPreco(dto.getPreco());
		
		
		destino = repository.saveAndFlush(destino);
		
		return new DestinoDTO(destino);
		
	}
	
}