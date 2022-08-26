import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { DoctorProfileService } from './doctor-profile.service';

describe('DoctorProfileService', () => {
  let service: DoctorProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(DoctorProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
