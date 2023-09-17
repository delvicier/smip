import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfMatriculaComponent } from './pdf-matricula.component';

describe('PdfMatriculaComponent', () => {
  let component: PdfMatriculaComponent;
  let fixture: ComponentFixture<PdfMatriculaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PdfMatriculaComponent]
    });
    fixture = TestBed.createComponent(PdfMatriculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
