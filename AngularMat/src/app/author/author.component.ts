import { AuthorService } from './../_services/author.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewAuthorComponent } from './new-author/new-author.component';

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

  showNewAuthorModal() {
    const dialog = this.dialog.open(NewAuthorComponent);
    dialog.afterClosed().subscribe(result => {
      this.authorService.add(result).subscribe();
    });
  }
}
