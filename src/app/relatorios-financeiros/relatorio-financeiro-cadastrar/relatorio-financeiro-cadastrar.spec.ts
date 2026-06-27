import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioFinanceiroCadastrar } from './relatorio-financeiro-cadastrar';

describe('RelatorioFinanceiroCadastrar', () => {
  let component: RelatorioFinanceiroCadastrar;
  let fixture: ComponentFixture<RelatorioFinanceiroCadastrar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelatorioFinanceiroCadastrar],
    }).compileComponents();

    fixture = TestBed.createComponent(RelatorioFinanceiroCadastrar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
