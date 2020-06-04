import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Level2ViewInstrumentsComponent } from './level2-view-instruments.component';

describe('Level2ViewInstrumentsComponent', () => {
  let component: Level2ViewInstrumentsComponent;
  let fixture: ComponentFixture<Level2ViewInstrumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Level2ViewInstrumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Level2ViewInstrumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
