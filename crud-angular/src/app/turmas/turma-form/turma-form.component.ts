import { Router } from '@angular/router';
import { TurmasService } from '../../shared/services/turmas.service';
import { Component } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-turma-form',
  templateUrl: './turma-form.component.html',
  styleUrls: ['./turma-form.component.css']
})
export class TurmaFormComponent {

  form = this.formBuilder.group({
    nome: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]]
  })

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private turmasService: TurmasService,
    private router: Router
  ){}

  enviar(){
    if(this.form.valid){
      this.turmasService.novaTurma(this.form.value).subscribe(
        res => this.cancelar()
      )
    }
  }

  cancelar(){
    this.router.navigate(['turmas/'])
  }

}
