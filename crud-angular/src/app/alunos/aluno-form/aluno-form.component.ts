import { Aluno } from './../../shared/models/aluno';
import { Turma } from './../../shared/models/turma';
import { Location } from '@angular/common';
import { AlunosService } from '../../shared/services/alunos.service';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { TurmasService } from 'src/app/shared/services/turmas.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit {

  form = this.formBuilder.group({
    id: [''],
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
    private location: Location,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.turmasService.list().subscribe(
      res => this.turmas = res
    )
    const aluno: Aluno = this.route.snapshot.data['aluno']
    this.form.patchValue({
      id: aluno.id,
      nome: aluno.nome
    })
  }

  enviar(){
    if(this.form.valid){
      this.alunosService.salvar(this.form.value).subscribe(
        res => {
          this.router.navigate(['turmas/detalhes/', this.form.value.turma?.id])
        }
      )
    }
  }

  cancelar(){
    this.location.back()
  }

}
