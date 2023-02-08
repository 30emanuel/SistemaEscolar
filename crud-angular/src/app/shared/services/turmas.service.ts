import { Turma } from './../models/turma';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TurmasService {

  private API = '/api/turma'

  constructor(private http: HttpClient) { }

  list(){
    return this.http.get<any[]>(this.API)
  }

  novaTurma(turma: Partial<Turma>){
    return this.http.post(this.API, turma)
  }

  buscarTurma(id: number){
    return this.http.get<any>(`${this.API}/${id}`)
  }
}
