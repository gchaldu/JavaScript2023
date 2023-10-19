import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarClientePageComponent } from './listar-cliente-page.component';

describe('ListarClientePageComponent', () => {
  let component: ListarClientePageComponent;
  let fixture: ComponentFixture<ListarClientePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarClientePageComponent]
    });
    fixture = TestBed.createComponent(ListarClientePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
