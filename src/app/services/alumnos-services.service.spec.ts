import { TestBed } from '@angular/core/testing';

import { AlumnosServicesService } from './alumnos-services.service';

describe('AlumnosServicesService', () => {
  let service: AlumnosServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlumnosServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
