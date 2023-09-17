import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfDeceComponent } from './pdf-dece.component';

describe('PdfDeceComponent', () => {
  let component: PdfDeceComponent;
  let fixture: ComponentFixture<PdfDeceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PdfDeceComponent]
    });
    fixture = TestBed.createComponent(PdfDeceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
