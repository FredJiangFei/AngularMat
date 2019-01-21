import { FilePreviewOverlayService } from './../_services/file-preview-overlay.service';
import { DelModalComponent } from './del-modal/del-modal.component';
import { AuthorService } from './../_services/author.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewAuthorComponent } from './new-author/new-author.component';
import { Author } from './author';
import { reduce, map } from 'rxjs/operators';
import { ComponentPortal, CdkPortal } from '@angular/cdk/portal';
import { FilePreviewOverlayRef } from '../_services/file-preview-overlay-ref';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  authors$ = this.authorService.authors$;
  title = 'Authors';
  displayedColumns: string[] = ['id', 'name', 'gender', 'age', 'action'];

  constructor(
    private authorService: AuthorService,
    private dialog: MatDialog,
    private filePreview: FilePreviewOverlayService
  ) {}

  ngOnInit() {
    this.authorService.getAll().subscribe();
  }

  showNewModal() {
    const dialog = this.dialog.open(NewAuthorComponent);
    dialog.afterClosed().subscribe(result => {
      if (result && result.isSave) {
        this.authorService.add(result.author).subscribe();
      }
    });
  }

  showEditModal(author: Author) {
    const editAuthor = { data: Object.assign({}, author) };
    const dialog = this.dialog.open(NewAuthorComponent, editAuthor);
    dialog.afterClosed().subscribe(result => {
      if (result && result.isSave) {
        this.authorService.edit(result.author).subscribe();
      }
    });
  }

  showDeleteModal(author: Author) {
    const dialog = this.dialog.open(DelModalComponent);
    dialog.afterClosed().subscribe(result => {
      if (result) {
        this.authorService.delete(author.id).subscribe();
      }
    });
  }

  changeTitle() {
    this.title = 'change author';
  }

  getTotalAge() {
    return this.authors$.pipe(
      map(t => t.map(a => a.age).reduce((acc, value) => acc + value, 0))
    );
  }

  createOverlay() {
    this.filePreview.open();
  }
}
