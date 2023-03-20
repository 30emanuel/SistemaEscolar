import { AlunosService } from './../../shared/services/alunos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aluno } from 'src/app/shared/models/aluno';
import { Location, DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ErroDialogComponent } from 'src/app/shared/erro-dialog/erro-dialog.component';

@Component({
  selector: 'app-aluno-detalhes',
  templateUrl: './aluno-detalhes.component.html',
  styleUrls: ['./aluno-detalhes.component.css']
})
export class AlunoDetalhesComponent implements OnInit {

  aluno!: Aluno
  id!: number
  readonly displayedColumns = ['disciplina','valor','bimestre', 'acoes']

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private alunosService: AlunosService,
    public dialog: MatDialog,
    private datePipe: DatePipe
  ){
    this.route.params.subscribe(params => this.id = params['id'])
  }

  ngOnInit(): void {
    this.atualizar()
  }

  atualizar(){
    this.alunosService.buscarAluno(this.id).subscribe(
      res => this.aluno = res[0] as Aluno,
      error => this.erro('Erro ao carregar aluno.')
    )
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

  deletarNota(nota: any){
    this.alunosService.deletarNota(nota).subscribe(
      res => this.atualizar(),
      error => this.erro('Erro ao excluir nota.')
    )
  }

  editarNota(nota: any){
    this.router.navigate([`alunos/editarnota/${nota.id}`])
  }

  erro(msgErro: string){
    this.dialog.open(ErroDialogComponent,{
      data: msgErro
    })
  }

}
