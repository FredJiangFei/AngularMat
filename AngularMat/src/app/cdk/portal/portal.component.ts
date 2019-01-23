import { Component, OnInit, AfterViewInit, ViewChild, TemplateRef, ViewContainerRef } from '@angular/core';
import { Portal, ComponentPortal, TemplatePortal } from '@angular/cdk/portal';
import { PortalExampleComponent } from './portal-example/portal-example.component';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})

export class PortalComponent implements AfterViewInit {
    @ViewChild('templatePortalContent') content: TemplateRef<any>;
    selectedPortal: Portal<any>;

    componentPortal: ComponentPortal<PortalExampleComponent>;
    templatePortal: TemplatePortal<any>;

    constructor(private ref: ViewContainerRef) {}

    ngAfterViewInit() {
      this.componentPortal = new ComponentPortal(PortalExampleComponent);
      this.templatePortal =  new TemplatePortal(this.content, this.ref);

      setTimeout(() => {
        this.selectedPortal = this.componentPortal;
      }, 100);
    }
}
