import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfSegurosComponent } from './pdf-seguros.component';

describe('PdfSegurosComponent', () => {
  let component: PdfSegurosComponent;
  let fixture: ComponentFixture<PdfSegurosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PdfSegurosComponent]
    });
    fixture = TestBed.createComponent(PdfSegurosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
