import { SharedModule } from './../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunosRoutingModule } from './alunos-routing.module';
import { BuscarAlunoComponent } from './buscar-aluno/buscar-aluno.component';
import { AlunoDetalhesComponent } from './aluno-detalhes/aluno-detalhes.component';
import { NotaFormComponent } from './nota-form/nota-form.component';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    AlunoFormComponent,
    BuscarAlunoComponent,
    AlunoDetalhesComponent,
    NotaFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AlunosRoutingModule,
    SharedModule,
  ],
  providers: [DatePipe]
})
export class AlunosModule { }
