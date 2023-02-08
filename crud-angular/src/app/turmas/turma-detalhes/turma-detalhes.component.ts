import { Turma } from './../../shared/models/turma';
import { ActivatedRoute } from '@angular/router';
import { TurmasService } from '../../shared/services/turmas.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-turma-detalhes',
  templateUrl: './turma-detalhes.component.html',
  styleUrls: ['./turma-detalhes.component.css']
})
export class TurmaDetalhesComponent implements OnInit {

  id!: number
  turma!: Turma
  readonly displayedColumns = ['id','nome']

  constructor(
    private turmasService: TurmasService,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ){
    this.activatedRoute.params.subscribe(params => this.id = params['id']);
  }

  ngOnInit(): void {
    this.turmasService.buscarTurma(this.id).subscribe(
      res => this.turma = res
    )
  }

  voltar(){
    this.location.back()
  }

}
