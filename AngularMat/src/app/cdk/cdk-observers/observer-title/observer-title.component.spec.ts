import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObserverTitleComponent } from './observer-title.component';

describe('ObserverTitleComponent', () => {
  let component: ObserverTitleComponent;
  let fixture: ComponentFixture<ObserverTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObserverTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObserverTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
