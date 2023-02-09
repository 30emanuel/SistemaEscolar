import { TestBed } from '@angular/core/testing';

import { TurmaResolver } from './turma.resolver';

describe('TurmaResolver', () => {
  let resolver: TurmaResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(TurmaResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
