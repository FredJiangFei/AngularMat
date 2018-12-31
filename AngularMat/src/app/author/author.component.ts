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
  displayedColumns: string[] = ['position', 'name', 'gender', 'symbol', 'action'];
  authors: Author[] = [
    { position: 1, name: 'Hydrogen', gender: 'Male', symbol: 'H' },
    { position: 2, name: 'Helium', gender: 'Female', symbol: 'He' },
    { position: 3, name: 'Lithium', gender: 'Female', symbol: 'Li' },
    { position: 4, name: 'Beryllium', gender: 'Male', symbol: 'Be' },
    { position: 5, name: 'Boron', gender: 'Female', symbol: 'B' },
    { position: 6, name: 'Carbon', gender: 'Male', symbol: 'C' },
    { position: 7, name: 'Nitrogen', gender: 'Female', symbol: 'N' },
    { position: 8, name: 'Oxygen', gender: 'Female', symbol: 'O' },
    { position: 9, name: 'Fluorine', gender: 'Male', symbol: 'F' },
    { position: 10, name: 'Neon', gender: 'Male', symbol: 'Ne' },
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
