import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoCorporativoEditar } from './projeto-corporativo-editar';

describe('ProjetoCorporativoEditar', () => {
  let component: ProjetoCorporativoEditar;
  let fixture: ComponentFixture<ProjetoCorporativoEditar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjetoCorporativoEditar],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjetoCorporativoEditar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
