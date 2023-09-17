import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeceEditpdfComponent } from './dece-editpdf.component';

describe('DeceEditpdfComponent', () => {
  let component: DeceEditpdfComponent;
  let fixture: ComponentFixture<DeceEditpdfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeceEditpdfComponent]
    });
    fixture = TestBed.createComponent(DeceEditpdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
