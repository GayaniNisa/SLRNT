import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentStateChangeComponent } from './instrument-state-change.component';

describe('InstrumentStateChangeComponent', () => {
  let component: InstrumentStateChangeComponent;
  let fixture: ComponentFixture<InstrumentStateChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstrumentStateChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentStateChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
