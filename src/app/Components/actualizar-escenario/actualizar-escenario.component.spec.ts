import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarEscenarioComponent } from './actualizar-escenario.component';

describe('ActualizarEscenarioComponent', () => {
  let component: ActualizarEscenarioComponent;
  let fixture: ComponentFixture<ActualizarEscenarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarEscenarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarEscenarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
