import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatriculaDocComponent } from './matricula-doc.component';

describe('MatriculaDocComponent', () => {
  let component: MatriculaDocComponent;
  let fixture: ComponentFixture<MatriculaDocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatriculaDocComponent]
    });
    fixture = TestBed.createComponent(MatriculaDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
