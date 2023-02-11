package com.emanuel.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.emanuel.model.Aluno;
import com.emanuel.service.AlunoService;


@RestController
@RequestMapping("/api/aluno")
public class AlunoController {
    
  @Autowired
  private AlunoService alunoService;

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
}