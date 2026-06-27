import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioFinanceiroListar } from './relatorio-financeiro-listar';

describe('RelatorioFinanceiroListar', () => {
  let component: RelatorioFinanceiroListar;
  let fixture: ComponentFixture<RelatorioFinanceiroListar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelatorioFinanceiroListar],
    }).compileComponents();

    fixture = TestBed.createComponent(RelatorioFinanceiroListar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
