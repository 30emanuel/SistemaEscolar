import { TurmaDetalhesComponent } from './turma-detalhes/turma-detalhes.component';
import { TurmaFormComponent } from './turma-form/turma-form.component';
import { TurmasListaComponent } from './turmas-lista/turmas-lista.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: TurmasListaComponent },
  { path: 'novo', component: TurmaFormComponent},
  { path: 'detalhes/:id', component: TurmaDetalhesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TurmasRoutingModule { }
