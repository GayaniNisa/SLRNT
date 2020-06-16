import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Level2ManageInstrumentsComponent } from './level2-manage-instruments.component';

describe('Level2ManageInstrumentsComponent', () => {
  let component: Level2ManageInstrumentsComponent;
  let fixture: ComponentFixture<Level2ManageInstrumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Level2ManageInstrumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Level2ManageInstrumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
