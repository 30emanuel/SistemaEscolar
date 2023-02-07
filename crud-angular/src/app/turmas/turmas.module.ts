import { ReactiveFormsModule } from '@angular/forms';
import { TurmasRoutingModule } from './turmas-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TurmasListaComponent } from './turmas-lista/turmas-lista.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { TurmaFormComponent } from './turma-form/turma-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TurmaDetalhesComponent } from './turma-detalhes/turma-detalhes.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    TurmasListaComponent,
    TurmaFormComponent,
    TurmaDetalhesComponent
  ],
  imports: [
    CommonModule,
    TurmasRoutingModule,
    MatTableModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule
  ]
})
export class TurmasModule { }
