import { AlunosService } from './../../shared/services/alunos.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ErroDialogComponent } from 'src/app/shared/erro-dialog/erro-dialog.component';


@Component({
  selector: 'app-nota-form',
  templateUrl: './nota-form.component.html',
  styleUrls: ['./nota-form.component.css']
})
export class NotaFormComponent implements OnInit {

  form = this.formBuilder.group({
    id: [''],
    aluno: this.formBuilder.group({
      id: ['', [Validators.required]]
    }),
    disciplina: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    valor: ['', [Validators.required, Validators.min(0)]],
    bimestre: ['', [Validators.required, Validators.min(1)]]
  })

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private route: ActivatedRoute,
    private alunosService: AlunosService,
    private location: Location,
    public dialog: MatDialog
  ){}

  ngOnInit(): void {

    if(this.route.snapshot.data['nota']){
      const nota = this.route.snapshot.data['nota']
      this.form.patchValue({
        id: nota.id,
        aluno: {
          id: nota.aluno.id
        },
        disciplina: nota.disciplina,
        valor: nota.valor,
        bimestre: nota.bimestre
      })
    }else{
      this.route.params.subscribe(
        params => this.form.patchValue({
          aluno:{
            id: params['id']
          }
        })
      )
    }
  }

  enviar(){
    if(this.form.valid){
      this.alunosService.salvarNota(this.form.value).subscribe(
        res => this.cancelar(),
        error => this.erro('Erro ao salvar nota.')
      )
    }else{
      this.erro('Preencha todos os campos.')
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

}
