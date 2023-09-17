import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfRecordComponent } from './pdf-record.component';

describe('PdfRecordComponent', () => {
  let component: PdfRecordComponent;
  let fixture: ComponentFixture<PdfRecordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PdfRecordComponent]
    });
    fixture = TestBed.createComponent(PdfRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
