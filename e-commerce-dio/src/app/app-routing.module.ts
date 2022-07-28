import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {

    path: 'home',
    component: AppComponent,
    data: { titulo: 'Home' }
  },
  {
    path: 'sobre',
    component: AppComponent,
    data: { titulo: 'Sobre' }
  },
  {
    path: 'produtos',
    component: AppComponent,
    data: { titulo: 'Produtos' }
  },
  {
    path: 'suporte',
    component: AppComponent,
    data: { titulo: 'Suporte' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
