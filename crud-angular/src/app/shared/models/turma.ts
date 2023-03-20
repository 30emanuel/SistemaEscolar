import { Aluno } from './aluno';

export interface Turma {
  id: string,
  nome: string,
  periodo: string,
  alunos: Aluno[]
}
