import { Injectable } from '@angular/core';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal, CdkPortal } from '@angular/cdk/portal';
import { FilePreviewOverlayComponent } from '../file-preview-overlay/file-preview-overlay.component';
import { FilePreviewOverlayRef } from './file-preview-overlay-ref';

@Injectable({
  providedIn: 'root'
})
export class FilePreviewOverlayService {

  constructor(private overlay: Overlay) { }

  private getOverlayConfig(): OverlayConfig {
    const positionStrategy = this.overlay.position()
      .global()
      .centerHorizontally()
      .centerVertically();

    const overlayConfig = new OverlayConfig({
      hasBackdrop: true,
      backdropClass: 'dark-backdrop',
      panelClass: 'tm-file-preview-dialog-panel',
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy
    });

    return overlayConfig;
  }

  open() {
    const overlayConfig = this.getOverlayConfig();
    const overlayRef = this.overlay.create(overlayConfig);
    const dialogRef = new FilePreviewOverlayRef(overlayRef);

    overlayRef.backdropClick().subscribe(_ => dialogRef.close());

    const filePreviewPortal = new ComponentPortal(FilePreviewOverlayComponent);
    overlayRef.attach(filePreviewPortal);

    return dialogRef;
  }
}
