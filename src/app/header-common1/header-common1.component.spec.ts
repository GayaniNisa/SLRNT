import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCommon1Component } from './header-common1.component';

describe('HeaderCommon1Component', () => {
  let component: HeaderCommon1Component;
  let fixture: ComponentFixture<HeaderCommon1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderCommon1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderCommon1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
