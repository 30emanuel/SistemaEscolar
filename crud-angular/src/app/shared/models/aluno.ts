export interface Aluno {
  id: string,
  nome: string,
  turma:{
    id: string,
    nome: string
  },
  notas: []
}
