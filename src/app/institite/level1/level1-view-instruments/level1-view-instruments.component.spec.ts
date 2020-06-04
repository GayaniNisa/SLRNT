import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Level1ViewInstrumentsComponent } from './level1-view-instruments.component';

describe('Level1ViewInstrumentsComponent', () => {
  let component: Level1ViewInstrumentsComponent;
  let fixture: ComponentFixture<Level1ViewInstrumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Level1ViewInstrumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Level1ViewInstrumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
