import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Level0LandComponent } from './level0-land.component';

describe('Level0LandComponent', () => {
  let component: Level0LandComponent;
  let fixture: ComponentFixture<Level0LandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Level0LandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Level0LandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
