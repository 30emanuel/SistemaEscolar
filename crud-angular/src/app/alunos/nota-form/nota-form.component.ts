import { AlunosService } from './../../shared/services/alunos.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';


@Component({
  selector: 'app-nota-form',
  templateUrl: './nota-form.component.html',
  styleUrls: ['./nota-form.component.css']
})
export class NotaFormComponent implements OnInit {

  form = this.formBuilder.group({
    disciplina: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    nota: ['', [Validators.required, Validators.min(0)]],
    bimestre: ['', [Validators.required, Validators.min(1)]]
  })

  alunoId!: string

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private route: ActivatedRoute,
    private alunosService: AlunosService,
    private location: Location
  ){}

  ngOnInit(): void {
    this.route.params.subscribe(
      params => this.alunoId = params['id']
    )
  }

  enviar(){
    if(this.form.valid){
      this.alunosService.salvarNota(this.alunoId, this.form.value).subscribe(
        res => this.cancelar()
      )
    }
  }

  cancelar(){
    this.location.back()
  }

}
