package com.emanuel.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.emanuel.model.Aluno;
import com.emanuel.repository.AlunoRepository;

@Service
public class AlunoService {

  @Autowired
  private AlunoRepository alunoRepository;

  public List<Aluno> findAll() {
    return alunoRepository.findAll();
  }

  public Aluno findById(Long id) {
    return alunoRepository.findById(id).orElse(null);
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