import { AlunosService } from './../../shared/services/alunos.service';
import { Aluno } from './../../shared/models/aluno';
import { Turma } from './../../shared/models/turma';
import { ActivatedRoute, Router } from '@angular/router';
import { TurmasService } from '../../shared/services/turmas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-turma-detalhes',
  templateUrl: './turma-detalhes.component.html',
  styleUrls: ['./turma-detalhes.component.css']
})
export class TurmaDetalhesComponent implements OnInit {

  id!: number
  turma!: Turma
  readonly displayedColumns = ['id','nome', 'acoes']

  constructor(
    private turmasService: TurmasService,
    private alunosService: AlunosService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ){
    this.activatedRoute.params.subscribe(params => this.id = params['id']);
  }

  ngOnInit(): void {
    this.atualizar()
  }

  atualizar(){
    this.turmasService.buscarTurma(this.id).subscribe(
      res => this.turma = res
    )
  }

  voltar(){
    this.router.navigate(['turmas/'])
  }

  editar(aluno: Aluno){
    this.router.navigate([`alunos/editar/${aluno.id}`])
  }

  deletar(aluno: Aluno){
    this.alunosService.deletar(aluno).subscribe(
      res => this.atualizar()
    )
  }

}
