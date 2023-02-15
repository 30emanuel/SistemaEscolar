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

  buscarAluno(pesquisa: any){
    return this.http.get(`${this.API}/${pesquisa}`)
  }

  deletar(aluno: Aluno){
    return this.http.delete(`${this.API}/${aluno.id}`)
  }

  salvarNota(alunoId: string, nota: any){
    return this.http.post(`${this.API}/${alunoId}/notas`, nota)
  }

}
