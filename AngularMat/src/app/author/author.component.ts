import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { NewAuthorComponent } from './new-author/new-author.component';
import { Author } from './author';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent {
  displayedColumns: string[] = ['position', 'name', 'gender', 'action'];
  authors: Author[] = [
    { position: 1, name: 'Hydrogen', gender: 'Male' },
    { position: 2, name: 'Helium', gender: 'Female' },
    { position: 3, name: 'Lithium', gender: 'Female' },
    { position: 4, name: 'Beryllium', gender: 'Male' },
    { position: 5, name: 'Boron', gender: 'Female' },
    { position: 6, name: 'Carbon', gender: 'Male' },
    { position: 7, name: 'Nitrogen', gender: 'Female' },
    { position: 8, name: 'Oxygen', gender: 'Female' },
    { position: 9, name: 'Fluorine', gender: 'Male' },
    { position: 10, name: 'Neon', gender: 'Male' },
  ];

  dataSource: MatTableDataSource<Author>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private dialog: MatDialog) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Author>(this.authors);
  }

  showNewAuthorModal() {
    const dialog = this.dialog.open(NewAuthorComponent);
    dialog.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}
