import { Turma } from './../../shared/models/turma';
import { TurmasService } from 'src/app/shared/services/turmas.service';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TurmaResolver implements Resolve<Turma> {

  constructor(
    private service: TurmasService
  ){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Turma> {
    if(route.params && route.params['id']){
      return this.service.buscarTurma(route.params['id'])
    }
    return of({
      id: '',
      nome: '',
      periodo: '',
      alunos: []
    })
  }
}
