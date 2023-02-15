package com.emanuel.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.emanuel.model.Nota;

@Repository
public interface NotaRepository extends JpaRepository<Nota, Long> {   
}