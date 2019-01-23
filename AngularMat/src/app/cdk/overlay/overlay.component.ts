import { Component, OnInit } from '@angular/core';
import { FilePreviewOverlayService } from 'src/app/_services/file-preview-overlay.service';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css']
})
export class OverlayComponent {

  constructor(private filePreview: FilePreviewOverlayService) { }

  createOverlay() {
    this.filePreview.open();
  }
}
