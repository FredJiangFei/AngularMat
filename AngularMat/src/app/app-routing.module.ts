import { AccessComponent } from './cdk/access/access.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';
import { AuthorComponent } from './author/author.component';
import { DragComponent } from './cdk/drag/drag.component';
import { CdkLayoutComponent } from './cdk/cdk-layout/cdk-layout.component';
import { CdkObserversComponent } from './cdk/cdk-observers/cdk-observers.component';

const routes: Routes = [
  { path: '', redirectTo: 'authors', pathMatch: 'full' },
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'books', component: BookComponent },
      { path: 'authors', component: AuthorComponent },
      { path: 'drag', component: DragComponent },
      { path: 'layout', component: CdkLayoutComponent },
      { path: 'observer', component: CdkObserversComponent },
      { path: 'access', component: AccessComponent },
    ]
  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
