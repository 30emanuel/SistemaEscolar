import { SharedModule } from './../shared/shared.module';
import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { TurmasRoutingModule } from './turmas-routing.module';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TurmasListaComponent } from './turmas-lista/turmas-lista.component';
import { TurmaFormComponent } from './turma-form/turma-form.component';
import { TurmaDetalhesComponent } from './turma-detalhes/turma-detalhes.component';


@NgModule({
  declarations: [
    TurmasListaComponent,
    TurmaFormComponent,
    TurmaDetalhesComponent
  ],
  imports: [
    CommonModule,
    TurmasRoutingModule,
    ReactiveFormsModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class TurmasModule { }
