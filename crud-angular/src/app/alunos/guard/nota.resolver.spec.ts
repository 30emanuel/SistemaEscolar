import { TestBed } from '@angular/core/testing';

import { NotaResolver } from './nota.resolver';

describe('NotaResolver', () => {
  let resolver: NotaResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(NotaResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
