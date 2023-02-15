package com.emanuel.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.emanuel.model.Aluno;
import com.emanuel.model.Nota;
import com.emanuel.repository.NotaRepository;

@Service
public class NotaService {

    @Autowired
    private NotaRepository notaRepository;

    public Nota save(Long alunoId, Nota nota) {
        Aluno aluno = new Aluno();
        aluno.setId(alunoId);
        nota.setAluno(aluno);
        return notaRepository.save(nota);
    }

    public void delete(Long id){
        notaRepository.deleteById(id);
    }

}