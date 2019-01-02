import { DelModalComponent } from './del-modal/del-modal.component';
import { AuthorService } from './../_services/author.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewAuthorComponent } from './new-author/new-author.component';
import { Author } from './author';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'gender', 'action'];
  authors$ = this.authorService.authors$;

  constructor(
    private authorService: AuthorService,
    private dialog: MatDialog) { }

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
}
