import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatriculaEditpdfComponent } from './matricula-editpdf.component';

describe('MatriculaEditpdfComponent', () => {
  let component: MatriculaEditpdfComponent;
  let fixture: ComponentFixture<MatriculaEditpdfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatriculaEditpdfComponent]
    });
    fixture = TestBed.createComponent(MatriculaEditpdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
