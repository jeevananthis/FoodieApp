import { TestBed } from '@angular/core/testing';

import { ReceipesListService } from './receipes-list.service';

describe('ReceipesListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReceipesListService = TestBed.get(ReceipesListService);
    expect(service).toBeTruthy();
  });
});
