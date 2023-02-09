import { Turma } from './../../shared/models/turma';
import { TurmasService } from '../../shared/services/turmas.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-turmas-lista',
  templateUrl: './turmas-lista.component.html',
  styleUrls: ['./turmas-lista.component.css']
})
export class TurmasListaComponent implements OnInit {

  turmas: Turma[] = []
  readonly displayedColumns = ['nome', 'acoes']

  constructor(
    private turmasService: TurmasService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.carregarTurmas()
  }

  carregarTurmas(){
    this.turmasService.list().subscribe(
      res => {
        this.turmas = res
      }
    )
  }

  novaTurma(){
    this.router.navigate(['novo'], {relativeTo: this.route})
  }

  detalhes(turma: Turma){
    this.router.navigate([`detalhes/${turma.id}`], {relativeTo: this.route})
  }

  editar(turma: Turma){
    this.router.navigate([`editar/${turma.id}`], {relativeTo: this.route})
  }

  remover(turma: Turma){
    this.turmasService.remover(turma.id).subscribe(
      res => this.carregarTurmas(),
      error => window.alert('Voce não pode remover uma Turma que tem Alunos')
    )
  }

}
