import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoCorporativoListar } from './projeto-corporativo-listar';

describe('ProjetoCorporativoListar', () => {
  let component: ProjetoCorporativoListar;
  let fixture: ComponentFixture<ProjetoCorporativoListar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjetoCorporativoListar],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjetoCorporativoListar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
