package com.emanuel.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.emanuel.model.Turma;
import com.emanuel.service.TurmaService;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/turma")
public class TurmaController {

  @Autowired
  private TurmaService turmaService;

  @GetMapping
  public ResponseEntity<List<Turma>> findAll() {
    List<Turma> turmas = turmaService.findAll();
    for (Turma turma : turmas) {
      turma.setAlunos(new ArrayList<>());
    }
    return ResponseEntity.ok().body(turmas);
  }

  @GetMapping("/{id}")
  public Turma findById(@PathVariable Long id) {
    return turmaService.findById(id);
  }
  
  @PostMapping
  public Turma save(@RequestBody Turma turma) {
    return turmaService.save(turma);
  }

  @PutMapping("/{id}")
  public Turma update(@PathVariable Long id, @RequestBody Turma turma) {
    return turmaService.update(turma);
  }

  @DeleteMapping("/{id}")
  public void delete(@PathVariable Long id) {
    turmaService.deleteById(id);
  }
}


