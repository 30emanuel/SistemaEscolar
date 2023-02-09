import { Aluno } from './aluno';

export interface Turma {
  id: string,
  nome: string,
  alunos: Aluno[]
}
