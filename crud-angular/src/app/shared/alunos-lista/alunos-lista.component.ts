import { Turma } from '../models/turma';
import { AlunosService } from '../services/alunos.service';
import { Router } from '@angular/router';
import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { Aluno } from 'src/app/shared/models/aluno';
import { MatDialog } from '@angular/material/dialog';
import { ErroDialogComponent } from 'src/app/shared/erro-dialog/erro-dialog.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-alunos-lista',
  templateUrl: './alunos-lista.component.html',
  styleUrls: ['./alunos-lista.component.css']
})
export class AlunosListaComponent implements OnDestroy {

  @Input() alunos!: Aluno[]
  @Output() atualizarLista = new EventEmitter(false);
  readonly displayedColumns = ['id','nome', 'turma', 'acoes']
  subscriptions: Subscription[] = []

  constructor(
    private router: Router,
    private alunosService: AlunosService,
    private dialog: MatDialog
  ){}

  editar(aluno: Aluno){
    this.router.navigate([`alunos/editar/${aluno.id}`])
  }

  deletar(aluno: Aluno){
    this.subscriptions.push(
      this.alunosService.deletar(aluno).subscribe(
        res => this.atualizar(),
        error => error.status === 500 ? this.erro('Não é possivel excluir um aluno com notas.') : this.erro('Erro ao excluir aluno.')
      )
    )
  }

  verTurma(turma: Turma){
    this.router.navigate([`turmas/${turma.id}`])
  }

  verAluno(aluno: Aluno){
    this.router.navigate([`alunos/${aluno.id}`])
  }

  novoAluno(){
    this.router.navigate([`alunos/novo`])
  }

  atualizar(){
    this.atualizarLista.emit(true)
  }

  erro(msgErro: string){
    this.dialog.open(ErroDialogComponent,{
      data: msgErro
    })
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe())
  }

}
