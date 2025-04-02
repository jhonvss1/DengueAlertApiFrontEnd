import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DengueComponent } from './cards/dengue/dengue.component';

const routes: Routes = [
  { path: '**', redirectTo: '' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
