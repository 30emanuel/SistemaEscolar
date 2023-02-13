import { AppMaterialModule } from './app-material/app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErroDialogComponent } from './erro-dialog/erro-dialog.component';
import { AlunosListaComponent } from './alunos-lista/alunos-lista.component';



@NgModule({
  declarations: [
    ErroDialogComponent,
    AlunosListaComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [
    ErroDialogComponent,
    AlunosListaComponent,
    AppMaterialModule
  ]
})
export class SharedModule { }
