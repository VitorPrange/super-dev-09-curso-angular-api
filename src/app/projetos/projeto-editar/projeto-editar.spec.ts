import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoEditar } from './projeto-editar';

describe('ProjetoEditar', () => {
  let component: ProjetoEditar;
  let fixture: ComponentFixture<ProjetoEditar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjetoEditar],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjetoEditar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
