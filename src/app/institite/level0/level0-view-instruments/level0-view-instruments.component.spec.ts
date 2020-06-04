import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Level0ViewInstrumentsComponent } from './level0-view-instruments.component';

describe('Level0ViewInstrumentsComponent', () => {
  let component: Level0ViewInstrumentsComponent;
  let fixture: ComponentFixture<Level0ViewInstrumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Level0ViewInstrumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Level0ViewInstrumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
