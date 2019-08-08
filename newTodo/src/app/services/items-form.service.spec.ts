import { TestBed } from '@angular/core/testing';

import { ItemsFormService } from './items-form.service';

describe('ItemsFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemsFormService = TestBed.get(ItemsFormService);
    expect(service).toBeTruthy();
  });
});
