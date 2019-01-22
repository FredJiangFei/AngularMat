import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdkLayoutComponent } from './cdk-layout.component';

describe('CdkLayoutComponent', () => {
  let component: CdkLayoutComponent;
  let fixture: ComponentFixture<CdkLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdkLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdkLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
