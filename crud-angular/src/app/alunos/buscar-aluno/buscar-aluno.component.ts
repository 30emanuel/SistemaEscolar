import { AlunosService } from './../../shared/services/alunos.service';
import { Component, OnDestroy } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { Aluno } from 'src/app/shared/models/aluno';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-buscar-aluno',
  templateUrl: './buscar-aluno.component.html',
  styleUrls: ['./buscar-aluno.component.css']
})
export class BuscarAlunoComponent implements OnDestroy {

  form = this.formBuilder.group({
    pesquisa: ['', [Validators.required, Validators.min(1), Validators.max(50)]]
  })

  subscriptions: Subscription[] = []
  alunos!: Aluno[]

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private alunosService: AlunosService
  ){}

  pesquisar(){
    if(this.form.valid){
      this.subscriptions.push(
        this.alunosService.buscarAluno(this.form.value.pesquisa).subscribe(
          res => this.alunos = res as Aluno[]
        )
      )
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe())
  }

}
