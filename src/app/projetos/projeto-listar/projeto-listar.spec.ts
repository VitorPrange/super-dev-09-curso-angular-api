import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoListar } from './projeto-listar';

describe('ProjetoListar', () => {
  let component: ProjetoListar;
  let fixture: ComponentFixture<ProjetoListar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjetoListar],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjetoListar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
