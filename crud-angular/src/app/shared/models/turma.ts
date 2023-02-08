import { Aluno } from './aluno';

export interface Turma {
  id: number,
  nome: string,
  alunos: Aluno[]
}
