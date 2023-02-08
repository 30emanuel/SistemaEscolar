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
    this.turmasService.list().subscribe(
      res => {
        this.turmas = res
        console.log(this.turmas)
      }
    )
  }

  novaTurma(){
    this.router.navigate(['novo'], {relativeTo: this.route})
  }

  detalhes(turma: Turma){
    this.router.navigate([`detalhes/${turma.id}`], {relativeTo: this.route})
  }

}
