import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-del-modal',
  templateUrl: './del-modal.component.html',
  styleUrls: ['./del-modal.component.css']
})

export class DelModalComponent {
  constructor(private def: MatDialogRef<DelModalComponent>) { }

  delete() {
    this.def.close(true);
  }
}
