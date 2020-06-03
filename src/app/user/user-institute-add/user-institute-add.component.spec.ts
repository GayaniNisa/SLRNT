import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInstituteAddComponent } from './user-institute-add.component';

describe('UserInstituteAddComponent', () => {
  let component: UserInstituteAddComponent;
  let fixture: ComponentFixture<UserInstituteAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserInstituteAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInstituteAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
