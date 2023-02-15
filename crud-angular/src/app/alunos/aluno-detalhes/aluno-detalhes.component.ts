import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aluno } from 'src/app/shared/models/aluno';
import {Location} from '@angular/common';

@Component({
  selector: 'app-aluno-detalhes',
  templateUrl: './aluno-detalhes.component.html',
  styleUrls: ['./aluno-detalhes.component.css']
})
export class AlunoDetalhesComponent implements OnInit {

  aluno!: Aluno
  readonly displayedColumns = ['disciplina','nota','bimestre', 'acoes']

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ){}

  ngOnInit(): void {
    this.aluno = this.route.snapshot.data['aluno'][0]
  }

  voltar(){
    this.location.back()
  }

  editarAluno(){
    this.router.navigate([`alunos/editar/${this.aluno.id}`])
  }

  criarNota(){
    this.router.navigate([`alunos/${this.aluno.id}/novanota`])
  }

  verTurma(){
    this.router.navigate([`turmas/${this.aluno.turma.id}`])
  }

}
