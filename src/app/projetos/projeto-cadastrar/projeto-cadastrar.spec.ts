import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoCadastrar } from './projeto-cadastrar';

describe('ProjetoCadastrar', () => {
  let component: ProjetoCadastrar;
  let fixture: ComponentFixture<ProjetoCadastrar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjetoCadastrar],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjetoCadastrar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
