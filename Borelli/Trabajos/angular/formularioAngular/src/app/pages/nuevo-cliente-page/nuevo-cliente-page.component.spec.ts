import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoClientePageComponent } from './nuevo-cliente-page.component';

describe('NuevoClientePageComponent', () => {
  let component: NuevoClientePageComponent;
  let fixture: ComponentFixture<NuevoClientePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevoClientePageComponent]
    });
    fixture = TestBed.createComponent(NuevoClientePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
