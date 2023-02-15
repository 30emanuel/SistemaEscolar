package com.emanuel.service;


import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.emanuel.model.Aluno;
import com.emanuel.repository.AlunoRepository;

@Service
public class AlunoService {

  @Autowired
  private AlunoRepository alunoRepository;

  public List<Aluno> findAlunoByNomeOrId(String param) {
    List<Aluno> alunos = new ArrayList<>();
    try {
      long id = Long.parseLong(param);
      Aluno aluno = alunoRepository.findById(id).orElse(null);
      if (aluno != null) {
        alunos.add(aluno);
      }
    } catch (NumberFormatException e) {
      alunos = alunoRepository.findAllByNomeContainingIgnoreCase(param);
    }
    return alunos;
  } 

  public Aluno save(Aluno aluno) {
    return alunoRepository.save(aluno);
  }

  public void deleteById(Long id) {
    alunoRepository.deleteById(id);
  }

  public Aluno update(Aluno aluno) {
    return alunoRepository.save(aluno);
  }

}
