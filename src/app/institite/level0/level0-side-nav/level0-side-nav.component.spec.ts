import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Level0SideNavComponent } from './level0-side-nav.component';

describe('Level0SideNavComponent', () => {
  let component: Level0SideNavComponent;
  let fixture: ComponentFixture<Level0SideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Level0SideNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Level0SideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
