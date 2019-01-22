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
import { FilePreviewOverlayComponent } from './file-preview-overlay/file-preview-overlay.component';
import { SearchAuthorComponent } from './search-author/search-author.component';
import { DragComponent } from './cdk/drag/drag.component';
import { CdkLayoutComponent } from './cdk/cdk-layout/cdk-layout.component';
import { CdkObserversComponent } from './cdk/cdk-observers/cdk-observers.component';
import { ObserverTitleComponent } from './cdk/cdk-observers/observer-title/observer-title.component';
import { AccessComponent } from './cdk/access/access.component';
import { ScrollComponent } from './cdk/scroll/scroll.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    BookComponent,
    AuthorComponent,
    NewAuthorComponent,
    DelModalComponent,
    DragComponent,
    ObserverTitleComponent,
    FilePreviewOverlayComponent,
    SearchAuthorComponent,
    CdkLayoutComponent,
    CdkObserversComponent,
    AccessComponent,
    ScrollComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShareModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [NewAuthorComponent, DelModalComponent, FilePreviewOverlayComponent]
})
export class AppModule { }
