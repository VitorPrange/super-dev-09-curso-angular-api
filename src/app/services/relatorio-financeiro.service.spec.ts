import { TestBed } from '@angular/core/testing';

import { RelatorioFinanceiroService } from './relatorio-financeiro.service';

describe('RelatorioFinanceiroService', () => {
  let service: RelatorioFinanceiroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RelatorioFinanceiroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
