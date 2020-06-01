import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCommon0Component } from './header-common0.component';

describe('HeaderCommon0Component', () => {
  let component: HeaderCommon0Component;
  let fixture: ComponentFixture<HeaderCommon0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderCommon0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderCommon0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
