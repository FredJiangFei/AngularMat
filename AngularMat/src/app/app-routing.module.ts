import { PortalComponent } from './cdk/portal/portal.component';
import { AccessComponent } from './cdk/access/access.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthorComponent } from './author/author.component';
import { DragComponent } from './cdk/drag/drag.component';
import { CdkLayoutComponent } from './cdk/cdk-layout/cdk-layout.component';
import { CdkObserversComponent } from './cdk/cdk-observers/cdk-observers.component';
import { ScrollComponent } from './cdk/scroll/scroll.component';
import { OverlayComponent } from './cdk/overlay/overlay.component';

const routes: Routes = [
  { path: '', redirectTo: 'authors', pathMatch: 'full' },
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'authors', component: AuthorComponent },
      { path: 'drag', component: DragComponent },
      { path: 'layout', component: CdkLayoutComponent },
      { path: 'observer', component: CdkObserversComponent },
      { path: 'access', component: AccessComponent },
      { path: 'scroll', component: ScrollComponent },
      { path: 'overlay', component: OverlayComponent },
      { path: 'portal', component: PortalComponent },
    ]
  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
