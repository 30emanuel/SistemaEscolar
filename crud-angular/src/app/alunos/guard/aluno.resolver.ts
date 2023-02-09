import { Aluno } from './../../shared/models/aluno';
import { AlunosService } from '../../shared/services/alunos.service';
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
export class AlunoResolver implements Resolve<Partial<Aluno>> {

  constructor(
    private service: AlunosService
  ){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Partial<Aluno>> {
    if(route.params && route.params['id']){
      return this.service.buscarAluno(route.params['id'])
    }
    return of({id: '', nome: ''});
  }
}
