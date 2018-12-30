import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-new-author',
  templateUrl: './new-author.component.html',
  styleUrls: ['./new-author.component.css']
})
export class NewAuthorComponent {
  author = {

  }
  constructor(private dialogRef: MatDialogRef<NewAuthorComponent>) { }

  save() {
    this.dialogRef.close(this.author);
  }
}
