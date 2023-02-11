package com.emanuel.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.emanuel.model.Aluno;
import com.emanuel.model.Turma;
import com.emanuel.repository.TurmaRepository;

@Service
public class TurmaService {

  @Autowired
  private TurmaRepository turmaRepository;

  public List<Turma> findAll() {
    return turmaRepository.findAll();
  }

  public Turma findById(Long id) {
    Turma turma = turmaRepository.findById(id).orElse(null);
    if (turma != null) {
      for (Aluno aluno : turma.getAlunos()) {
        aluno.setTurma(null);
      }
    }
    return turma;
  }

  public Turma save(Turma turma) {
    return turmaRepository.save(turma);
  }

  public Turma update(Turma turma) {
    return turmaRepository.save(turma);
  }

  public void deleteById(Long id) {
    turmaRepository.deleteById(id);
  }
}
