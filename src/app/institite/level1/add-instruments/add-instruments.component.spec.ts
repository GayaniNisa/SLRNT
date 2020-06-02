import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInstrumentsComponent } from './add-instruments.component';

describe('AddInstrumentsComponent', () => {
  let component: AddInstrumentsComponent;
  let fixture: ComponentFixture<AddInstrumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddInstrumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInstrumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
