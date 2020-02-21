import { TestBed } from '@angular/core/testing';

import { ValidateInputsService } from './validate-inputs.service';

describe('ValidateInputsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ValidateInputsService = TestBed.get(ValidateInputsService);
    expect(service).toBeTruthy();
  });
});
