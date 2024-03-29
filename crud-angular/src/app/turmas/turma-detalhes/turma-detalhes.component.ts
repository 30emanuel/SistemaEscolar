import { Turma } from './../../shared/models/turma';
import { ActivatedRoute, Router } from '@angular/router';
import { TurmasService } from '../../shared/services/turmas.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ErroDialogComponent } from 'src/app/shared/erro-dialog/erro-dialog.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-turma-detalhes',
  templateUrl: './turma-detalhes.component.html',
  styleUrls: ['./turma-detalhes.component.css']
})
export class TurmaDetalhesComponent implements OnInit, OnDestroy {

  id!: number
  turma!: Turma
  subscriptions: Subscription[] = []
  error: boolean = false

  constructor(
    private turmasService: TurmasService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
  ){
    this.activatedRoute.params.subscribe(params => this.id = params['id']);
  }

  ngOnInit(): void {
    this.atualizar()
  }

  atualizar(){
    this.subscriptions.push(
      this.turmasService.buscarTurma(this.id).subscribe(
        res => this.turma = res,
        error => {
          this.error = true
          this.erro('Erro ao carregar informações da turma.')
        }
      )
    )
  }

  editarTurma(){
    this.router.navigate([`turmas/editar/${this.turma.id}`])
  }

  voltar(){
    this.router.navigate(['turmas/'])
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
