import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentDeleteComponent } from './instrument-delete.component';

describe('InstrumentDeleteComponent', () => {
  let component: InstrumentDeleteComponent;
  let fixture: ComponentFixture<InstrumentDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstrumentDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
