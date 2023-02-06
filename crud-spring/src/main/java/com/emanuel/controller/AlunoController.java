package com.emanuel.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.emanuel.model.Aluno;
import com.emanuel.service.AlunoService;

import java.util.List;

@RestController
@RequestMapping("/api/aluno")
public class AlunoController {
    
  @Autowired
  private AlunoService alunoService;

  @GetMapping
  public List<Aluno> findAll() {
    return alunoService.findAll();
  }

  @GetMapping("/{id}")
  public Aluno findById(@PathVariable Long id) {
    return alunoService.findById(id);
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