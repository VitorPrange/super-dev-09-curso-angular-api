import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioFinanceiroEditar } from './relatorio-financeiro-editar';

describe('RelatorioFinanceiroEditar', () => {
  let component: RelatorioFinanceiroEditar;
  let fixture: ComponentFixture<RelatorioFinanceiroEditar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelatorioFinanceiroEditar],
    }).compileComponents();

    fixture = TestBed.createComponent(RelatorioFinanceiroEditar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
