import { NotaFormComponent } from './nota-form/nota-form.component';
import { AlunoDetalhesComponent } from './aluno-detalhes/aluno-detalhes.component';
import { BuscarAlunoComponent } from './buscar-aluno/buscar-aluno.component';
import { AlunoResolver } from './guard/aluno.resolver';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'novo', component: AlunoFormComponent, resolve: {aluno: AlunoResolver}},
  { path: 'buscar', component: BuscarAlunoComponent},
  { path: 'editar/:id', component: AlunoFormComponent, resolve: {aluno: AlunoResolver}},
  { path: ':id', component: AlunoDetalhesComponent, resolve: {aluno: AlunoResolver} },
  { path: ':id/novanota', component: NotaFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule { }
