import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdkObserversComponent } from './cdk-observers.component';

describe('CdkObserversComponent', () => {
  let component: CdkObserversComponent;
  let fixture: ComponentFixture<CdkObserversComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdkObserversComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdkObserversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
