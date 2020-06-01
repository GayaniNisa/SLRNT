import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelsLandComponent } from './levels-land.component';

describe('LevelsLandComponent', () => {
  let component: LevelsLandComponent;
  let fixture: ComponentFixture<LevelsLandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelsLandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelsLandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
