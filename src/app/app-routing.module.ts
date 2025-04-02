import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DengueComponent } from './cards/dengue/dengue.component';

const routes: Routes = [
  { path: '', component: DengueComponent }, // Rota padrão
  { path: '**', redirectTo: '' }, // Redireciona para rota padrão se não encontrar
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
