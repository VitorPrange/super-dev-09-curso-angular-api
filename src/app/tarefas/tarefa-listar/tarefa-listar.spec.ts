import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefaListar } from './tarefa-listar';

describe('TarefaListar', () => {
  let component: TarefaListar;
  let fixture: ComponentFixture<TarefaListar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarefaListar],
    }).compileComponents();

    fixture = TestBed.createComponent(TarefaListar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
