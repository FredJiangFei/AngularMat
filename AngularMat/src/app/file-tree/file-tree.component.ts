import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-tree',
  templateUrl: './file-tree.component.html',
  styleUrls: ['./file-tree.component.scss']
})
export class FileTreeComponent implements OnInit {
  public files = ['main.py', 'foo.py'];
  constructor() { }

  ngOnInit() {
  }

}
