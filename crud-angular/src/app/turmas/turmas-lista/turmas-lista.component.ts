import { ErroDialogComponent } from './../../shared/erro-dialog/erro-dialog.component';
import { Turma } from './../../shared/models/turma';
import { TurmasService } from '../../shared/services/turmas.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-turmas-lista',
  templateUrl: './turmas-lista.component.html',
  styleUrls: ['./turmas-lista.component.css']
})
export class TurmasListaComponent implements OnInit, OnDestroy {

  turmas: Turma[] = []
  private subscriptions: Subscription[] = []
  readonly displayedColumns = ['nome', 'acoes']

  constructor(
    private turmasService: TurmasService,
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.carregarTurmas()
  }

  carregarTurmas(){
    this.subscriptions.push(
      this.turmasService.list().subscribe(
        res => {
          this.turmas = res
        },
        error =>{
          this.erro('Erro ao carregar turmas.')
        }
      )
    )
  }

  novaTurma(){
    this.router.navigate(['novo'], {relativeTo: this.route})
  }

  detalhes(turma: Turma){
    this.router.navigate([`detalhes/${turma.id}`], {relativeTo: this.route})
  }

  editar(turma: Turma){
    this.router.navigate([`editar/${turma.id}`], {relativeTo: this.route})
  }

  remover(turma: Turma){
    this.subscriptions.push(
      this.turmasService.remover(turma.id).subscribe(
        res => this.carregarTurmas(),
        error => {
          if(error.status == 500){
            this.erro('Impossível remover turma com alunos matriculados.')
          }else{
            this.erro('Erro ao remover turma.')
          }
        }
      )
    )
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
