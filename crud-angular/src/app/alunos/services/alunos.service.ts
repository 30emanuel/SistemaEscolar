import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  private API = '/api/aluno'

  constructor(
    private http: HttpClient
  ) { }

  novoAluno(aluno: any){
    return this.http.post(this.API, aluno)
  }

}
