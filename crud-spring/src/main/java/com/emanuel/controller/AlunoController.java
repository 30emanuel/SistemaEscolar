package com.emanuel.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.emanuel.model.Aluno;
import com.emanuel.model.Nota;
import com.emanuel.service.AlunoService;
import com.emanuel.service.NotaService;


@RestController
@RequestMapping("/api/aluno")
public class AlunoController {
    
  @Autowired
  private AlunoService alunoService;

  @Autowired
  private NotaService notaService;

  @GetMapping("/{param}")
    public List<Aluno> findAlunoByNomeOrId(@PathVariable String param) {
        return alunoService.findAlunoByNomeOrId(param);
    }
  
  @PostMapping
  public Aluno save(@RequestBody Aluno aluno) {
    return alunoService.save(aluno);
  }
    
  @PutMapping("/{id}")
  public Aluno update(@PathVariable Long id, @RequestBody Aluno aluno) {
    return alunoService.update(aluno);
  }

  @DeleteMapping("/{id}")
  public void delete(@PathVariable Long id) {
    alunoService.deleteById(id);
  }

  @PostMapping("/notas")
  public Nota saveNota(@RequestBody Nota nota) {
    return notaService.save(nota);
  }

  @DeleteMapping("/notas/{id}")
  public void deleteNota(@PathVariable Long id){
    notaService.delete(id);
  }

  @GetMapping("/notas/{id}")
  public Nota findNota(@PathVariable Long id){
    return notaService.findNotaById(id);
  }

}