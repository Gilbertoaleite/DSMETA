package br.com.devsuperior.dsMeta.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.devsuperior.dsMeta.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long>{
	
}