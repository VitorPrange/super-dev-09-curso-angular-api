import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoCorporativoCadastrar } from './projeto-corporativo-cadastrar';

describe('ProjetoCorporativoCadastrar', () => {
  let component: ProjetoCorporativoCadastrar;
  let fixture: ComponentFixture<ProjetoCorporativoCadastrar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjetoCorporativoCadastrar],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjetoCorporativoCadastrar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
