import { AppMaterialModule } from './app-material/app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErroDialogComponent } from './erro-dialog/erro-dialog.component';



@NgModule({
  declarations: [
    ErroDialogComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [
    ErroDialogComponent
  ]
})
export class SharedModule { }
