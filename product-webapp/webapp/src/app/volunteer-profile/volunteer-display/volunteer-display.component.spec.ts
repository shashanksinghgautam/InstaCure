import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerDisplayComponent } from './volunteer-display.component';

describe('VolunteerDisplayComponent', () => {
  let component: VolunteerDisplayComponent;
  let fixture: ComponentFixture<VolunteerDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolunteerDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
