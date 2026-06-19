import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefaCadastrar } from './tarefa-cadastrar';

describe('TarefaCadastrar', () => {
  let component: TarefaCadastrar;
  let fixture: ComponentFixture<TarefaCadastrar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarefaCadastrar],
    }).compileComponents();

    fixture = TestBed.createComponent(TarefaCadastrar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
