package com.emanuel.model;



import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.Data;

@Data
@Entity
public class Aluno {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 50, nullable = false)
    private String nome;

    @Column
    private Date dataNascimento;
    
    @ManyToOne
    @JoinColumn(name = "turma_id")
    @JsonIgnoreProperties("alunos")
    private Turma turma;

    @OneToMany(mappedBy = "aluno")
    @JsonIgnoreProperties("aluno")
    private List<Nota> notas;



}
