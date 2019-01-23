import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ComponentFactoryResolver,
  Injector,
  ApplicationRef,
  ViewContainerRef
} from '@angular/core';
import {
  PortalHost,
  DomPortalHost,
  CdkPortal,
  TemplatePortal
} from '@angular/cdk/portal';

@Component({
  selector: 'app-search-author',
  template: `
    <ng-template cdkPortal>
      <ng-content></ng-content>
    </ng-template>
  `,
  styles: []
})
export class SearchAuthorComponent implements OnInit, AfterViewInit, OnDestroy {
  private portalHost: PortalHost;
  @ViewChild(CdkPortal) portal;

  constructor(
    private resolver: ComponentFactoryResolver,
    private injector: Injector,
    private appRef: ApplicationRef,
    private ref: ViewContainerRef
  ) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    const selector = document.querySelector('#search-outlet');
    this.portalHost = new DomPortalHost(
      selector,
      this.resolver,
      this.appRef,
      this.injector
    );

    this.portalHost.attach(this.portal);
  }

  ngOnDestroy(): void {
    this.portalHost.detach();
  }
}
