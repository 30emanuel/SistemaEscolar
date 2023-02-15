import { TurmaResolver } from './guard/turma.resolver';
import { TurmaDetalhesComponent } from './turma-detalhes/turma-detalhes.component';
import { TurmaFormComponent } from './turma-form/turma-form.component';
import { TurmasListaComponent } from './turmas-lista/turmas-lista.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: TurmasListaComponent },
  { path: 'novo', component: TurmaFormComponent, resolve: {turma: TurmaResolver}},
  { path: ':id', component: TurmaDetalhesComponent},
  { path: 'editar/:id', component: TurmaFormComponent, resolve: {turma: TurmaResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TurmasRoutingModule { }
