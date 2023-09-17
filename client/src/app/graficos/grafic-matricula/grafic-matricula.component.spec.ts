import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficMatriculaComponent } from './grafic-matricula.component';

describe('GraficMatriculaComponent', () => {
  let component: GraficMatriculaComponent;
  let fixture: ComponentFixture<GraficMatriculaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraficMatriculaComponent]
    });
    fixture = TestBed.createComponent(GraficMatriculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
