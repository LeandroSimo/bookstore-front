import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { CategoriaReadComponent } from './components/views/categoria/categoria-read/categoria-read.component';
import { CategoriaCreateComponent } from './components/views/categoria/categoria-create/categoria-create.component';
import { CategoriaDeleteComponent } from './components/views/categoria/categoria-delete/categoria-delete.component';
import { CategoriaUpdateComponent } from './components/views/categoria/categoria-update/categoria-update.component';
import { LivroReadAllComponent } from './components/views/livro/livro-read-all/livro-read-all.component';
import { LivroCreateComponent } from './components/views/livro/livro-create/livro-create.component';
import { LivroUpdateComponent } from './components/views/livro/livro-update/livro-update.component';
import { LivroDeleteComponent } from './components/views/livro/livro-delete/livro-delete.component';
import { LivroReadComponent } from './components/views/livro/livro-read/livro-read.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "category",
    component: CategoriaReadComponent
  },
  {
    path: 'category/create',
    component: CategoriaCreateComponent
  },
  {
    path: 'category/delete/:id',
    component: CategoriaDeleteComponent
  },
  {
    path: 'category/update/:id',
    component: CategoriaUpdateComponent
  },
  {
    path: 'category/:id_cat/books',
    component: LivroReadAllComponent
  },
  {
    path: 'category/:id_cat/books/create',
    component: LivroCreateComponent
  },
  {
    path: 'category/:id_cat/books/:id/update',
    component: LivroUpdateComponent
  },
  {
    path: 'category/:id_cat/books/:id/delete',
    component: LivroDeleteComponent
  },
  {
    path: 'category/:id_cat/books/:id/read',
    component: LivroReadComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
