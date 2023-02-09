import { Turma } from './../../shared/models/turma';
import { Router, ActivatedRoute } from '@angular/router';
import { TurmasService } from '../../shared/services/turmas.service';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-turma-form',
  templateUrl: './turma-form.component.html',
  styleUrls: ['./turma-form.component.css']
})
export class TurmaFormComponent implements OnInit {

  form = this.formBuilder.group({
    id: [''],
    nome: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]]
  })

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private turmasService: TurmasService,
    private router: Router,
    private route: ActivatedRoute
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
      this.turmasService.salvar(this.form.value).subscribe(
        res => this.cancelar()
      )
    }
  }

  cancelar(){
    this.router.navigate(['turmas/'])
  }

}
