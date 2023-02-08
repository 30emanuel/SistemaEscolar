import { Turma } from './../../shared/models/turma';
import { Location } from '@angular/common';
import { AlunosService } from './../services/alunos.service';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { TurmasService } from 'src/app/shared/services/turmas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit {

  form = this.formBuilder.group({
    nome: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    turma: this.formBuilder.group({
      id: ['', [Validators.required]]
    })
  })

  turmas!: Turma[]

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private turmasService: TurmasService,
    private alunosService: AlunosService,
    private router: Router,
    private location: Location
  ){}

  ngOnInit(): void {
    this.turmasService.list().subscribe(
      res => this.turmas = res
    )
  }

  enviar(){
    if(this.form.valid){
      this.alunosService.novoAluno(this.form.value).subscribe(
        res => {
          console.log('Aluno salvo'),
          this.router.navigate(['turmas/detalhes/', this.form.value.turma?.id])
        }
      )
    }
  }

  cancelar(){
    this.location.back()
  }

}
