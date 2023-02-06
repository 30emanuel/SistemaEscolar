package com.emanuel.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.emanuel.model.Turma;

@Repository
public interface TurmaRepository extends JpaRepository<Turma, Long> {
}
