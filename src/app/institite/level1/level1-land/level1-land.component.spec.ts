import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Level1LandComponent } from './level1-land.component';

describe('Level1LandComponent', () => {
  let component: Level1LandComponent;
  let fixture: ComponentFixture<Level1LandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Level1LandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Level1LandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
