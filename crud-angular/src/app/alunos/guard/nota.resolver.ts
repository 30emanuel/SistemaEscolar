import { AlunosService } from './../../shared/services/alunos.service';
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
export class NotaResolver implements Resolve<any> {

  constructor(
    private service: AlunosService
  ){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    if(route.params && route.params['id']){
      return this.service.buscarNota(route.params['id'])
    }
    return of()
  }
}
