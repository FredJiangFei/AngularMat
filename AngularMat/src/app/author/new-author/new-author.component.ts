import { Author } from './../author';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-new-author',
  templateUrl: './new-author.component.html',
  styleUrls: ['./new-author.component.css']
})

export class NewAuthorComponent {
  author = {  };

  constructor(
    private dialogRef: MatDialogRef<NewAuthorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Author) {
      if (data) {
        this.author = data;
      }
    }

  save() {
    this.dialogRef.close({
      author: this.author,
      isSave: true
    });
  }
}
