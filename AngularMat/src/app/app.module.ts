import { DelModalComponent } from './author/del-modal/del-modal.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';
import { AuthorComponent } from './author/author.component';
import { ShareModule } from './share/share.module';
import { NewAuthorComponent } from './author/new-author/new-author.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    BookComponent,
    AuthorComponent,
    NewAuthorComponent,
    DelModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShareModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [NewAuthorComponent, DelModalComponent]
})
export class AppModule { }
