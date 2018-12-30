import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewAuthorComponent } from './new-author/new-author.component';

export interface PeriodicElement {
  position: number;
  name: string;
  gender: string;
  symbol: string;
}


@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent {
  displayedColumns: string[] = ['position', 'name', 'gender', 'symbol', 'action'];
  dataSource: PeriodicElement[] = [
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

  constructor(
    private dialog: MatDialog) { }
  
  showNewAuthorModal() {
    const dialog = this.dialog.open(NewAuthorComponent);
    dialog.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}
