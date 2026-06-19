import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefaEditar } from './tarefa-editar';

describe('TarefaEditar', () => {
  let component: TarefaEditar;
  let fixture: ComponentFixture<TarefaEditar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarefaEditar],
    }).compileComponents();

    fixture = TestBed.createComponent(TarefaEditar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
