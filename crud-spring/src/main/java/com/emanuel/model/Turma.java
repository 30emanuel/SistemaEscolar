package com.emanuel.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Data;

@Data
@Entity
public class Turma {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
  
    @Column
    private String nome;

    @Column
    private String periodo;
 
    @OneToMany(mappedBy = "turma")
    @JsonIgnoreProperties({"turma", "notas"})
    private List<Aluno> alunos;
    
}