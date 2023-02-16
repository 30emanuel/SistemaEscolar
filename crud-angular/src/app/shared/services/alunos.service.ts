import { Observable } from 'rxjs';
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

  buscarAluno(pesquisa: any): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(`${this.API}/${pesquisa}`)
  }

  deletar(aluno: Aluno){
    return this.http.delete(`${this.API}/${aluno.id}`)
  }

  salvarNota(nota: any){
    return this.http.post(`${this.API}/notas`, nota)
  }

  deletarNota(nota: any){
    return this.http.delete(`${this.API}/notas/${nota.id}`)
  }

}
