import { BuscarAlunoComponent } from './buscar-aluno/buscar-aluno.component';
import { AlunoResolver } from './guard/aluno.resolver';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'novo', component: AlunoFormComponent, resolve: {aluno: AlunoResolver}},
  { path: 'editar/:id', component: AlunoFormComponent, resolve: {aluno: AlunoResolver}},
  { path: 'buscar', component: BuscarAlunoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule { }
