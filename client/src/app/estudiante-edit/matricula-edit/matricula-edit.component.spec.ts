import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatriculaEditComponent } from './matricula-edit.component';

describe('MatriculaEditComponent', () => {
  let component: MatriculaEditComponent;
  let fixture: ComponentFixture<MatriculaEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatriculaEditComponent]
    });
    fixture = TestBed.createComponent(MatriculaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
