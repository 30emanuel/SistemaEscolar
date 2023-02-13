import { SharedModule } from './../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunosRoutingModule } from './alunos-routing.module';
import { BuscarAlunoComponent } from './buscar-aluno/buscar-aluno.component';


@NgModule({
  declarations: [
    AlunoFormComponent,
    BuscarAlunoComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AlunosRoutingModule,
    SharedModule
  ]
})
export class AlunosModule { }
