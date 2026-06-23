import { TestBed } from '@angular/core/testing';

import { ProjetoCorporativoService } from './projeto-corporativo.service';

describe('ProjetoCorporativoService', () => {
  let service: ProjetoCorporativoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjetoCorporativoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
