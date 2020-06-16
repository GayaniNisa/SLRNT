import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicInstituteProfileComponent } from './public-institute-profile.component';

describe('PublicInstituteProfileComponent', () => {
  let component: PublicInstituteProfileComponent;
  let fixture: ComponentFixture<PublicInstituteProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicInstituteProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicInstituteProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
