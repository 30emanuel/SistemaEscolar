import { Turma } from './../../shared/models/turma';
import { Router, ActivatedRoute } from '@angular/router';
import { TurmasService } from '../../shared/services/turmas.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ErroDialogComponent } from 'src/app/shared/erro-dialog/erro-dialog.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-turma-form',
  templateUrl: './turma-form.component.html',
  styleUrls: ['./turma-form.component.css']
})
export class TurmaFormComponent implements OnInit, OnDestroy {

  form = this.formBuilder.group({
    id: [''],
    nome: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]]
  })

  subscriptions: Subscription[] = []

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private turmasService: TurmasService,
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ){}

  ngOnInit(): void {
    const turma: Turma = this.route.snapshot.data['turma']
    this.form.setValue({
      id: turma.id,
      nome: turma.nome
    })
  }

  enviar(){
    if(this.form.valid){
      this.subscriptions.push(
        this.turmasService.salvar(this.form.value).subscribe(
          res => this.cancelar(),
          error => this.erro('Erro ao salvar turma.')
        )
      )
    }else{
      this.erro('Preencha todos os campos')
    }
  }

  cancelar(){
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
