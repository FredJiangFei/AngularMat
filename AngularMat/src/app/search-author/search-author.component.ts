import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ComponentFactoryResolver,
  Injector,
  ApplicationRef,
  ViewContainerRef,
} from '@angular/core';
import { PortalHost, DomPortalHost, CdkPortal, TemplatePortal } from '@angular/cdk/portal';

@Component({
  selector: 'app-search-author',
  template: `
  <ng-template cdkPortal #pageActions>
    <ng-content></ng-content>
  </ng-template>
  `,
  styles: []
})
export class SearchAuthorComponent implements OnInit, AfterViewInit, OnDestroy {
  private portalHost: PortalHost;
  @ViewChild('pageActions') pageActionsTmplRef;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private appRef: ApplicationRef,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.portalHost = new DomPortalHost(
      document.querySelector('#page-actions-container'),
      this.componentFactoryResolver,
      this.appRef,
      this.injector
    );
    console.log(this.portalHost);

    const portal = new TemplatePortal(
      this.pageActionsTmplRef,
      this.viewContainerRef
    );
    this.portalHost.attach(portal);
  }

  ngOnDestroy(): void {
    this.portalHost.detach();
  }
}
