import { Aluno } from '../models/aluno';
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

  salvar(aluno: any){
    return this.http.post(this.API, aluno)
  }

  buscarAluno(id: string){
    return this.http.get(`${this.API}/${id}`)
  }

  deletar(aluno: Aluno){
    return this.http.delete(`${this.API}/${aluno.id}`)
  }

}
