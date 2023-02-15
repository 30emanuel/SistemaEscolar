import { Aluno } from './../../shared/models/aluno';
import { Turma } from './../../shared/models/turma';
import { Location } from '@angular/common';
import { AlunosService } from '../../shared/services/alunos.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { TurmasService } from 'src/app/shared/services/turmas.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ErroDialogComponent } from 'src/app/shared/erro-dialog/erro-dialog.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit, OnDestroy {

  form = this.formBuilder.group({
    id: [''],
    nome: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    turma: this.formBuilder.group({
      id: ['', [Validators.required]]
    })
  })

  turmas!: Turma[]
  subscriptions: Subscription[] = []

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private turmasService: TurmasService,
    private alunosService: AlunosService,
    private location: Location,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ){}

  ngOnInit(): void {
    this.turmasService.list().subscribe(
      res => this.turmas = res,
      error => this.erro('Erro ao carregar turmas.')
    )
    const aluno: Aluno = this.route.snapshot.data['aluno'][0]
    if(aluno){
      this.form.patchValue({
        id: aluno.id,
        nome: aluno.nome
      })
    }
  }

  enviar(){
    if(this.form.valid){
      this.subscriptions.push(
        this.alunosService.salvar(this.form.value).subscribe(
          res => this.location.back(),
          error => this.erro('Erro ao salvar aluno.')
        )
      )
    }else{
      this.erro('Preencha todos os campos')
    }
  }

  cancelar(){
    this.location.back()
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
