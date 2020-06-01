import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCommon2Component } from './header-common2.component';

describe('HeaderCommon2Component', () => {
  let component: HeaderCommon2Component;
  let fixture: ComponentFixture<HeaderCommon2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderCommon2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderCommon2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
