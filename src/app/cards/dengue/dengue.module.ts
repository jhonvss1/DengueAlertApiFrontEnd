import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DengueComponent } from './dengue.component';

@NgModule({
  declarations: [DengueComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [DengueComponent]
})
export class DengueModule { }