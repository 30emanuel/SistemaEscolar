export interface Aluno {
  id: string,
  nome: string,
  dataNascimento: Date,
  turma:{
    id: string,
    nome: string
  },
  notas: []
}
